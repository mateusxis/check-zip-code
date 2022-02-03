const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');

module.exports = ({ config, router }) => {
  const app = new Koa();

  app
    .use(helmet())
    .use(compress())
    .use(cors())
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(router.routes());

  const start = () => {
    try {
      app.listen(config.port, () => {
        console.log(`Server listening on ${config.port}`);
      });
    } catch (err) {
      console.log('Problem initializing application dependencies');
      process.exit(1);
    }
  };

  return { start };
};
