exports.isLoggedIn = async (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }

  res.redirect("/auth/login");
};
