const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello DevOps - Devan Santo" });
});

// ✅ WAJIB untuk deployment
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;