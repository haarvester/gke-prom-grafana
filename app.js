const express = require('express');
const promClient = require('prom-client');

const app = express();

const routeRequestCounter = new promClient.Counter({
  name: 'route_requests_total',
  help: 'Number of requests received on each route',
  labelNames: ['method', 'route'],
});

app.get('/', async (req, res) => {
  routeRequestCounter.inc({ method: req.method, route: '/' });
  res.send('Hello World!');
});

app.get('/notfound', async (req, res) => {
  routeRequestCounter.inc({ method: req.method, route: '/notfound' });
  res.status(404).send('Not Found');
});

app.get('/error', async (req, res) => {
  routeRequestCounter.inc({ method: req.method, route: '/error' });
  res.status(500).send('Internal Server Error');
});

app.get('/success', async (req, res) => {
  routeRequestCounter.inc({ method: req.method, route: '/success' });
  res.status(200).send('OK');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.send(await promClient.register.metrics());
});

app.listen(3000, () => console.log('App is running on port 3000'));

