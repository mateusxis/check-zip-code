const { createContainer, asFunction, asValue } = require('awilix');
const router = require('./application/router');
const server = require('./application/server');
const config = require('./application/config');

const container = createContainer();

container.register({
  config: asValue(config),
  router: asFunction(router).singleton(),
  server: asFunction(server).singleton()
});

module.exports = container;
