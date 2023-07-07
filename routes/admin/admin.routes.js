const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/dashboard");
});

router.get("/products", (req, res) => {
  res.render("admin/products");
});

router.get("/orders", (req, res) => {
  res.render("admin/orders");
});

router.get("/categories", (req, res) => {
  res.render("admin/categories");
});

module.exports = router;
