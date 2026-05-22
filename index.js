const express = require('express');
const helmet = require('helmet');
const client = require('prom-client');

const app = express();
const PORT = 3000;

// Helmet Security
app.use(helmet());

// Prometheus Metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
  name: 'node_requests_total',
  help: 'Total Requests'
});

// Logging Middleware
app.use((req, res, next) => {
  console.log(JSON.stringify({
    method: req.method,
    url: req.url,
    time: new Date()
  }));

  counter.inc();
  next();
});

// Main Route
app.get('/', (req, res) => {
  res.send('DevSecOps App Running Securely!');
});

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'UP'
  });
});

// Metrics Endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});