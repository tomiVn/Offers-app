const router = require('express').Router();
const authController = require('../controllers/authController');
const postsController = require('../controllers/postsController');
const clientController = require( '../controllers/clientController' );

router.use(authController)
      .use(postsController)
      .use(clientController);

module.exports = router;