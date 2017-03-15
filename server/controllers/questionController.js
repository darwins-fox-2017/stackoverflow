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
      username: req.body.username,
      password: hash.generate(req.body.password),
      email: req.body.email,
      admin: req.body.admin,
      updateAt: new Date()
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
      {username: req.body.username,
        password: hash.generate(req.body.password),
        email: req.body.email,
        admin: req.body.admin
      }).then(function (user) {
        res.send(user)
      })
    }
  }
