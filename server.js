const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = 3000;

// collect default metrics
client.collectDefaultMetrics();

// route utama
app.get("/", (req, res) => {
  res.json({
    message: "Hello DevOps - Devan Santo"
  });
});

// endpoint health
app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

// endpoint metrics untuk prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;