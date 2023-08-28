const Product = require("../../models/product.model");
const Cart = require("../../models/cart.model");

exports.getCart = async (req, res) => {
  try {
    if (!req.session.userId && !req.session) {
      return res.render("web/cart", { carts: [] });
    }

    const carts = await Cart.find({ userId: req.session.userId }).populate(
      "productId"
    );

    res.render("web/cart", { carts: carts });
  } catch (error) {
    console.log(error);
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.session.userId;

  try {
    const product = await Product.findById(productId);

    const newCart = await new Cart({
      userId: userId,
      productId: productId,
      quantity: quantity ? quantity : 1,
      subtotal: quantity ? product.price * quantity : product.price * 1,
    });

    await newCart.save();
    // res.json({ result: "Product Added To Cart" });
    res.redirect("/shop");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.removeCart = async (req, res) => {
  const cartId = req.body.cartId;

  try {
    const rmCart = await Cart.findByIdAndDelete(cartId);

    res.json({ result: cartId });
  } catch (error) {
    console.log(error);
  }
};
