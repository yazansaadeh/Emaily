const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const session = require("express-session");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/emaily-dev")
  .then(() => {
    console.log("connect successful");
  })
  .catch((err) => {
    console.log("connect failed");
  });

const sessionConfig = {
  secret: keys.cookieKey,
  resave: "false",
  saveUninitialized: "true",
  cookie: {
    httpOnly: true,
    expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  },
};

app.use(bodyParser.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use(billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
