const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const {
  getOrders,
  getOrderDetails,
} = require("../../controllers/admin/orders.controller");

const router = express.Router();

router.get("/", isAdmin, (req, res) => {
  res.render("admin/dashboard", { path: "/admin" });
});
router.get("/orders", isAdmin, getOrders);

router.get("/order-details/:orderId", isAdmin, getOrderDetails);

// router.get("/categories", isAdmin, (req, res) => {
//   res.render("admin/categories");
// });

module.exports = router;
