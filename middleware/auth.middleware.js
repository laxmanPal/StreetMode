const User = require("../models/user.model");

exports.isAdmin = async (req, res, next) => {
  if (req.session && req.session.isAdmin === true) {
    return next();
  }

  res.redirect("/");
};
