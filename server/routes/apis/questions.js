var express = require('express');
var router = express.Router();

let questionController = require('../../controllers/questionController')

router.get('/', questionController.index)

router.post('/', questionController.create)

router.get('/:id', questionController.show)

router.put('/:id', questionController.update)

router.delete('/:id', questionController.destroy)

module.exports = router;
