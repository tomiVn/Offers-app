const router = require('express').Router();
const authController = require('../controllers/authController');
const clientController = require( '../controllers/clientController' );

router.use(authController)
      .use(clientController);

module.exports = router;