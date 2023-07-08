const mongoose = require("mongoose");
const userModel = require("./user.model");
const productModel = require("./product.model");

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: userModel,
      required: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: productModel,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlists", wishlistSchema);
