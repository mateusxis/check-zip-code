const { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status');
const Router = require('koa-router');

module.exports = ({ logger, zipCodeDomain }) => {
  const router = new Router();

  router.get('/address', async (ctx) => {
    const { zipCode } = ctx.query;

    try {
      const address = await zipCodeDomain.get({
        zipCode: zipCode
      });

      ctx.body = address;
      ctx.status = address ? OK : NOT_FOUND;
    } catch (error) {
      logger.error({ error }, 'Error getting address.');
      ctx.body = error.massage;
      ctx.status = INTERNAL_SERVER_ERROR;
    }
  });

  router.get('/healthcheck', (ctx) => {
    ctx.status = OK;
    ctx.body = 'OK';
  });

  router.get('/readiness', async (ctx) => {
    const zipCodeLiveness = await zipCodeDomain.isUp();

    ctx.status = zipCodeLiveness ? OK : INTERNAL_SERVER_ERROR;
    ctx.body = zipCodeLiveness ? 'OK' : 'NOK';
  });

  return router;
};
