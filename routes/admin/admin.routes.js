const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/", isAdmin, (req, res) => {
  res.render("admin/dashboard");
});
router.get("/orders", isAdmin, (req, res) => {
  res.render("admin/orders");
});

router.get("/categories", isAdmin, (req, res) => {
  res.render("admin/categories");
});

module.exports = router;
