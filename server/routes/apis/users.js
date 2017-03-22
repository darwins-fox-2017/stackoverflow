var express = require('express');
var router = express.Router();

let userController = require('../../controllers/userController')

/* GET users listing. */
router.get('/ping', function(req, res, next) {
  res.json({
    status: true,
    msg: 'up'
  });
});

router.get('/', userController.index)

router.post('/register', userController.create)

router.post('/login', userController.login)

module.exports = router;
