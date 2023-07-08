const User = require("../../models/user.model");

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.render("admin/users", { users: users });
};
