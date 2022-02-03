const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const koaLogger = require('koa-pino-logger');

module.exports = ({ config, logger, router }) => {
  const app = new Koa();

  app
    .use(koaLogger())
    .use(helmet())
    .use(compress())
    .use(cors())
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(router.routes());

  const start = () => {
    try {
      app.listen(config.port, () => {
        logger.info(`Server listening on ${config.port}`);
      });
    } catch (err) {
      logger.error({ error: err }, 'Problem initializing application dependencies');
      process.exit(1);
    }
  };

  return { start };
};
