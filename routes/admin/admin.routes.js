const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const Order = require("../../models/order.model");

const router = express.Router();

router.get("/", isAdmin, (req, res) => {
  res.render("admin/dashboard");
});
router.get("/orders", isAdmin, async (req, res) => {
  const orders = await Order.find().populate("userId");

  res.render("admin/orders", { orders: orders });
  // res.send(orders);
});

router.get("/order-details/:orderId", async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId)
      .populate("userId")
      .populate("products.productID");
    res.render("admin/order-details", { order });
    // res.send(order);
  } catch (error) {
    console.log(error);
  }
});

router.get("/categories", isAdmin, (req, res) => {
  res.render("admin/categories");
});

module.exports = router;
