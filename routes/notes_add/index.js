const Router = require('koa-router');
const notes = require('../../data');
const router = new Router();
const { v4: uuidv4 } = require('uuid');

router.post('/notes', async (ctx) => {
  notes.push({ ...ctx.request.body, id: uuidv4() });
  ctx.response.status = 204;
})

module.exports = router;