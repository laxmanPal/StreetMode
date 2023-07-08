const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const {
  getProducts,
  addProduct,
} = require("../../controllers/admin/products.controller");

const router = express.Router();

router.get("/products", isAdmin, getProducts);

router.post("/add-products", isAdmin, addProduct);

module.exports = router;
