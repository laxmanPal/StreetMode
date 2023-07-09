const express = require("express");
const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");
const { isLoggedIn } = require("../../middleware/web.middleware");
const {
  getCart,
  addToCart,
  removeCart,
} = require("../../controllers/web/cart.controller");
const router = express.Router();

router.get("/cart", getCart);

router.post("/add-to-cart", isLoggedIn, addToCart);

router.post("/remove-cart", isLoggedIn, removeCart);

module.exports = router;
