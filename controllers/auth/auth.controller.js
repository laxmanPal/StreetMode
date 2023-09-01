const bcrypt = require("bcrypt");
const User = require("../../models/user.model");

exports.getRegister = (req, res) => {
  res.render("auth/register");
};

exports.getLogin = (req, res) => {
  res.render("auth/login");
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const securePass = await bcrypt.hash(password, 12);

    const newUser = await new User({
      name,
      email,
      phone,
      password: securePass,
      isAdmin: false,
    });

    await newUser.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.redirect("/register");
    }

    const isMatch = await bcrypt.compare(password, isUser.password);

    if (!isMatch) {
      return res.redirect("login");
    }

    req.session.userId = isUser._id;
    req.session.isAdmin = isUser.isAdmin;

    if (req.session.isAdmin) {
      return res.redirect("/admin");
    }

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
