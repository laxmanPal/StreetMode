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
      quantity: quantity,
      subtotal: product.price * quantity,
    });

    await newCart.save();
    res.redirect("/shop");
  } catch (error) {
    console.log(error);
  }

  // res.render("web/cart");
};

exports.removeCart = async (req, res) => {
  const cartId = req.body.cartId;

  try {
    const rmCart = await Cart.findByIdAndDelete(cartId);

    res.redirect("/cart");
  } catch (error) {
    console.log(error);
  }
};