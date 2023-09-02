const express = require("express");
const {
  getRegister,
  getLogin,
  registerUser,
  loginUser,
  logout,
} = require("../../controllers/auth/auth.controller");

const router = express.Router();

// GET Routes
router.get("/register", getRegister);

router.get("/login", getLogin);

router.get("/logout", logout);

// POST Routes

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
