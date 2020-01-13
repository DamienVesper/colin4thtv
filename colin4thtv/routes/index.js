let express = require(`express`);
let router = express.Router();

/* GET pages. */
router.get(`/`, (req, res, next) => res.render(`index`, { title: `Home` }));
router.get(`/about`, (req, res, next) => res.render(`about`, { title: `About` }));
router.get(`/donate`, (req, res, next) => res.render(`donate`, { title: `Donate` }));
router.get(`/commands`, (req, res, next) => res.render(`commands`, { title: `Commands` }));
router.get(`/team`, (req, res, next) => res.render(`team`, { title: `Meet the Team` }));

router.get(`/live`, (req, res, next) => res.render(`live`, { title: `Live` }));
router.get(`/discord`, (req, res, next) => res.send(`<script> window.location.href='https://discordapp.com/invite/UBWKGsx/'; </script>`));

module.exports = router;