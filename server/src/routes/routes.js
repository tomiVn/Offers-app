const router = require('express').Router();
const authController = require('../controllers/authController');
const postsController = require('../controllers/postsController');
const clientController = require( '../controllers/clientController');
const offerController = require( '../controllers/offerController');

router.use(authController)
      .use(postsController)
      .use(offerController)
      .use(clientController);

module.exports = router;