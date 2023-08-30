const mongoose = require("mongoose");
const userModel = require("./user.model");
const productModel = require("./product.model");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: userModel,
      required: true,
    },
    products: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: productModel,
          required: true,
        },
      },
    ],
    totalPrice: { type: Number, required: true },
    shippingAddress: {
      name: { type: String },
      address: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    orderStatus: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
