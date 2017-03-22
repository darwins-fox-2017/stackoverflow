var express = require('express');
var router = express.Router();

let homeController = require('../../controllers/homeController')

/* GET users listing. */
router.get('/ping', function(req, res, next) {
  res.json({
    status: true,
    msg: 'up'
  });
});

router.get('/', homeController.index)


module.exports = router;
