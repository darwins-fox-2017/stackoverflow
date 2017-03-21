var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    status: true,
    msg: 'up'
  });
});

module.exports = router;
