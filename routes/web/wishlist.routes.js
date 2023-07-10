const express = require("express");
const {
  getWishlist,
  addToWishlist,
  removeWishlist,
} = require("../../controllers/web/wishlist.controller");
const { isLoggedIn } = require("../../middleware/web.middleware");
const router = express.Router();

router.get("/wishlist", getWishlist);

router.post("/add-to-wishlist", isLoggedIn, addToWishlist);

router.post("/remove-wishlist", isLoggedIn, removeWishlist);

module.exports = router;
