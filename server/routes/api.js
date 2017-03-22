var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var questionController = require('../controllers/questionController')
var answerController = require('../controllers/answerController')
var voteController = require('../controllers/voteController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//User Router
router.get('/user', userController.findAllUser);

router.get('/user/:id', userController.findUserById);

router.post('/user', userController.createUser);

router.put('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);


//Question router
router.get('/question', questionController.findAllQuestion);

router.get('/question/:id', questionController.findQuestionById);

router.post('/question', questionController.createQuestion);

router.put('/question/:id', questionController.updateQuestion);

router.delete('/question/:id', questionController.deleteQuestion);

//Answer Router
router.get('/answer', answerController.findAllAnswer);

router.get('/answer/:id', answerController.findAnswerById);

router.post('/answer', answerController.createAnswer);

router.put('/answer/:id', answerController.updateAnswer);

router.delete('/answer/:id', answerController.deleteAnswer);

//VOte Router
router.post('/upvote', voteController.upVote);

router.post('/downvote', voteController.downVote);

module.exports = router;
