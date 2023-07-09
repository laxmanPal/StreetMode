const express = require("express");
const Product = require("../../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find().limit(8);

  // .sort({ createdAt: -1 })
  // .limit(8)

  res.render("web/home", { products: products });
});

router.get("/shop", async (req, res) => {
  const products = await Product.find();

  res.render("web/shop", { products: products });
});

router.get("/single-product/:id", async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);

  res.render("web/single-product", { product: product });
});

module.exports = router;
