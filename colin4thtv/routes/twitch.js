var express = require(`express`);
var router = express.Router();

/* GET twitch listing. */
router.get(`/live`, (req, res, next) => res.render(`api/live.pug`));
router.get(`/chat`, (req, res, next) => res.render(`api/chat.pug`));

module.exports = router;