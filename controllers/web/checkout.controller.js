const stripe = require("stripe")(process.env.STRIPE_PK);
const Cart = require("../../models/cart.model");
const Order = require("../../models/order.model");

exports.getBilling = (req, res) => {
  res.render("web/billing-details");
};

exports.addBillingDetails = (req, res) => {
  req.session.billingDetails = req.body;
  res.redirect("/place-order");
};

exports.getPlaceOrder = async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.session.userId }).populate(
      "productId"
    );
    res.render("web/place-order", { products: products });
  } catch (error) {
    console.log(error);
  }
};

exports.checkout = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.session.userId }).populate(
      "productId"
    );

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productId.name,
        },
        unit_amount: item.productId.price * 100,
      },
      quantity: item.productId.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/shop",
    });

    if (session) {
      const totalAmount = lineItems.reduce(
        (total, item) => total + item.price_data.unit_amount * item.quantity,
        0
      );

      const billingDetails = req.session.billingDetails;

      console.log(billingDetails);

      const newOrder = new Order({
        userId: req.session.userId,
        products: cartItems.map((item) => ({ productID: item.productId })),
        totalPrice: totalAmount,
        shippingAddress: {
          name: billingDetails.name,
          address: billingDetails.billing_address,
          city: billingDetails.city,
          state: billingDetails.state,
          zip: billingDetails.zipcode,
        },
        paymentMethod: { type: "card" },
        orderStatus: "complete",
      });

      await newOrder.save();

      await Cart.deleteMany({ userId: req.session.userId });
      res.session.billingDetails = {};
    }

    res.redirect(session.url);
  } catch (error) {
    console.log(error);
  }
};
