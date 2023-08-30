const Cart = require("../models/cart.model");

exports.beforeCheckout = async (req, res, next) => {
  const carts = await Cart.find({ userId: req.session.userId });

  if (!carts.length) {
    res.redirect("/cart");
    return;
  }

  next();
};
