const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },
    dis: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
