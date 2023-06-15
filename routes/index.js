const combineRouters = require('koa-combine-routers');
const ping = require('./ping');
const notes = require('./notes');
const notes_add = require('./notes__add');
const notes_del = require('./notes_del')

const router = combineRouters(
  ping,
  notes,
  notes_add,
  notes_del,
);

module.exports = router;