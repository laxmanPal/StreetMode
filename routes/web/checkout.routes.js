const express = require("express");
const {
  getBilling,
  addBillingDetails,
  getPlaceOrder,
  checkout,
} = require("../../controllers/web/checkout.controller");
const { beforeCheckout } = require("../../middleware/checkout.middleware");

const router = express.Router();

router.get("/billing-details", beforeCheckout, getBilling);

router.post("/billing-details", beforeCheckout, addBillingDetails);

router.get("/place-order", beforeCheckout, getPlaceOrder);

router.post("/create-checkout-session", beforeCheckout, checkout);

module.exports = router;
