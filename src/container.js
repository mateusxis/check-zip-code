const { createContainer, asFunction, asValue } = require('awilix');
const config = require('./config');
const router = require('./application/router');
const server = require('./application/server');
const zipCodeDomain = require('./domain/zipCode');
const loggerFactory = require('./infrastructure/logger');
const searchZipCodeService = require('./integrations/searchZipCodeService');

const container = createContainer();

container.register({
  config: asValue(config()),
  logger: asFunction(loggerFactory).singleton(),
  router: asFunction(router).singleton(),
  server: asFunction(server).singleton(),
  searchZipCodeService: asFunction(searchZipCodeService).singleton(),
  zipCodeDomain: asFunction(zipCodeDomain).singleton()
});

module.exports = container;
