var jwt = require('jsonwebtoken')
var hash = require('password-hash')
var models = require('../models')
require('dotenv').config()

module.exports = {
  findAllQuestion : (req,res)=>{
    models.Question.findAll().then(function(users){
      res.send(users);
    })
  },
  findQuestionById : (req,res)=>{
    models.Question.findById(req.params.id).then(function (user) {
      res.send(user)
    })
  },
  deleteQuestion : (req,res)=>{
    models.Question.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateQuestion : (req,res)=>{
    models.Question.update({
      title: req.body.title,
      content: req.body.content
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    })
    .then(function (result) {
      console.log(result);
      res.send(result[1]);
    });
  },
  createQuestion : (req,res)=>{
    models.Question.create(
      {title: req.body.title,
       content: req.body.content,
        UserId: req.body.UserId
      }).then(function (user) {
        res.send(user)
      })
    }
  }
