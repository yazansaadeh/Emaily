const express = require("express");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const Router = express.Router();

Router.post("/api/stripe", async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 email credits",
    source: req.body.token,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = Router;
