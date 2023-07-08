const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

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
  })
);

//////////////// Routes /////////////////

// Web Routes
app.use(require("./routes/web/web.routes"));

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
