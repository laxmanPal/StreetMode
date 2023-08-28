const express = require("express");
const Cart = require("../../models/cart.model");
const Order = require("../../models/order.model");
const stripe = require("stripe")(process.env.STRIPE_PK);
const router = express.Router();

router.get("/billing-details", (req, res) => {
  res.render("web/billing-details");
});

router.post("/billing-details", (req, res) => {
  req.session.billingDetails = req.body;
  res.redirect("/place-order");
});

router.get("/place-order", async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.session.userId }).populate(
      "productId"
    );
    res.render("web/place-order", { products: products });
  } catch (error) {
    console.log(error);
  }
});

router.post("/create-checkout-session", async (req, res) => {
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
        unit_amount: item.productId.price.toString() * 100,
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

    const order = new Order({
      items: cartItems.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
    });

    res.redirect(session.url);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
