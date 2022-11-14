const router = require('express').Router();
const { CLIENT_PATH } = require('../config/constants');

router.all("/*", (req, res) => {
    res.sendFile('index.html', { root: __dirname + '../../../../' + CLIENT_PATH });
});

module.exports = router;