const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello DevOps - Devan Santo" });
});

module.exports = app;