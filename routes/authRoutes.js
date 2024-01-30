const express = require("express");
const passport = require("passport");

const Router = express.Router();

Router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

Router.get("/auth/google/callback", passport.authenticate("google"));

Router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

Router.get("/api/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(req.user);
  });
});

module.exports = Router;
