const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("pull request test");
});

app.listen(5000);
