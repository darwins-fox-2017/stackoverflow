var express = require('express');
var router = express.Router();

let questionController = require('../../controllers/questionController')

router.get('/', questionController.index)

router.post('/', questionController.create)

module.exports = router;
