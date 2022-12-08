const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const postsController = require('../controllers/postsController');
const clientController = require( '../controllers/clientController');
const offerController = require( '../controllers/offerController');

router.use(authController)
      .use(userController)
      .use(postsController)
      .use(offerController)
      .use(clientController);

module.exports = router;