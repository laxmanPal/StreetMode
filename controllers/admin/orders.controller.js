const Order = require("../../models/order.model");

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("userId");

  res.render("admin/orders", { orders: orders, path: "/orders" });
  // res.send(orders);
};

exports.getOrderDetails = async (req, res) => {
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
};
