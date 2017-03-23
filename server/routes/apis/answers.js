var express = require('express');
var router = express.Router();

let answerController = require('../../controllers/answerController')

router.get('/', answerController.index)

router.post('/', answerController.create)

router.get('/:id', answerController.show)

router.put('/:id', answerController.update)

router.delete('/:id', answerController.destroy)

router.post('/:id/upvote', answerController.upvote)

module.exports = router;
