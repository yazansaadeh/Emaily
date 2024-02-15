const express = require("express");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Survey = require("../models/Surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Router = express.Router();

Router.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map((email) => ({ email: email.trim() })),
    dateSent: Date.now(),
  });
  const mailer = new Mailer(survey, surveyTemplate(survey));
  await mailer.send();
  await survey.save();
  req.user.credits -= 1;
  const user = await req.user.save();
  res.send(user);
});

module.exports = Router;
