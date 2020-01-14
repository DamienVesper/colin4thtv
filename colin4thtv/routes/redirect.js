let express = require(`express`);
let router = express.Router();

/* Redirect pages. */
router.get(`/sfo`, (req, res, next) => `<script> window.location.href = "https://surviv.io/?region=na&zone=sfo"; </script>`);
router.get(`/nyc`, (req, res, next) => `<script> window.location.href = "https://surviv.io/?region=na&zone=nyc"; </script>`);
router.get(`/chi`, (req, res, next) => `<script> window.location.href = "https://surviv.io/?region=na&zone=chi"; </script>`);
router.get(`/mia`, (req, res, next) => `<script> window.location.href = "https://surviv.io/?region=na&zone=mia"; </script>`);

router.get(`/cs`, (req, res, next) => `<script> window.location.href = "https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true"; </script>`);
router.get(`/discord`, (req, res, next) => res.send(`<script> window.location.href='https://discordapp.com/invite/UBWKGsx/'; </script>`));

module.exports = router;