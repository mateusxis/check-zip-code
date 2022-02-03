const { OK } = require('http-status');
const Router = require('koa-router');

module.exports = () => {
  const router = new Router();

  router.get('/healthcheck', (ctx) => {
    ctx.status = OK;
    ctx.body = 'OK';
  });
};
