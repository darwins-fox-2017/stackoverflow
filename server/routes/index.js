var express = require('express');
var router = express.Router();
var jwt = require('../helper/jwt.js')
var oauth = require('../helper/oauth.js')
var threadGet = require('../helper/thread/thread-get.js')
var threadPost = require('../helper/thread/thread-post.js')
var threadDelete = require('../helper/thread/thread-delete.js')
var threadPut = require('../helper/thread/thread-put.js')

var questionGet = require('../helper/question/question-get.js')
var questionPost = require('../helper/question/question-post.js')
var questionPut = require('../helper/question/question-put.js')

var User = require("../models/userSchema.js");
var Thread = require("../models/threadSchema.js");
var Comment = require("../models/commentSchema.js");



router.post('/register', oauth.register, function (req, res, next) {
    res.send('sucess register')
});
router.post('/login', oauth.login)

router.get('/thread', jwt.verify, threadGet.get);
router.post('/thread', jwt.verify, threadPost.post);
router.delete('/thread', jwt.verify, threadDelete.delete);
router.put('/thread', jwt.verify, threadPut.put);

router.get('/question/:threadId', jwt.verify, questionGet.get);
router.post('/question', jwt.verify, questionPost.post);
router.put('/question', jwt.verify, questionPut.put);


module.exports = router;
