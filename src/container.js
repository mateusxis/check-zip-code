const { createContainer, asFunction, asValue } = require('awilix');
const router = require('./application/router');
const server = require('./application/server');
const config = require('./application/config');
const loggerFactory = require('./infrastructure/logger');

const container = createContainer();

container.register({
  config: asValue(config),
  logger: asFunction(loggerFactory).singleton(),
  router: asFunction(router).singleton(),
  server: asFunction(server).singleton()
});

module.exports = container;
