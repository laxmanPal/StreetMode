const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const { getUsers } = require("../../controllers/admin/users.controller");

const router = express.Router();

router.get("/users", isAdmin, getUsers);

module.exports = router;
