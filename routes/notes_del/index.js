const Router = require('koa-router');
const router = new Router();
const notes = require('../../data');

router.delete('/notes/:id', async (ctx) => {
  const noteID = ctx.params.id;
  const index = notes.findIndex((o) => o.id === noteID);
  if (index !== -1) {
    notes.splice(index, 1);
  }
  ctx.response.status = 204;
});

module.exports = router;