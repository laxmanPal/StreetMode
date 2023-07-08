const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("web/home");
});

router.get("/shop", (req, res) => {
  res.render("web/shop");
});

router.get("/single-product", (req, res) => {
  res.render("web/single-product");
});

module.exports = router;
