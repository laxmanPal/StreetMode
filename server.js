const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/user.model");
const cors = require("cors");

// Dotenv Config
require("dotenv").config();

// APP
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Static Files and EJS
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

// Global Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: new Date(Date.now() + 3600000) },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);
app.use(cors());

// Custom Slobal Middleware

app.use(async (req, res, next) => {
  try {
    if (!req.session.userId) {
      userName = false;
      return next();
    }

    const user = await User.findById(req.session.userId);

    if (user) {
      userName = user ? user.firstName : "User";
      next();
    }
  } catch (error) {
    console.log(error);
  }
});

//////////////// Routes /////////////////

// Web Routes
app.use(require("./routes/web/web.routes"));
app.use(require("./routes/web/cart.routes"));
app.use(require("./routes/web/wishlist.routes"));
app.use(require("./routes/web/checkout.routes"));

// Admin Routes
app.use("/admin", require("./routes/admin/admin.routes"));
app.use("/admin", require("./routes/admin/users.routes"));
app.use("/admin", require("./routes/admin/products.routes"));

// Auth Routes
app.use("/auth", require("./routes/auth/auth.route"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MongoDB connected\nApp running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
