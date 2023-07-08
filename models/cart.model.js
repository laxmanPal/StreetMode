const mongoose = require("mongoose");
const userModel = require("./user.model");
const productModel = require("./product.model");

const cartSchema = new mongoose.Schema(
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
    quantity: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carts", cartSchema);
