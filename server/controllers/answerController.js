var jwt = require('jsonwebtoken')
var hash = require('password-hash')
var models = require('../models')
require('dotenv').config()

module.exports = {
  findAllAnswer : (req,res)=>{
    models.Answer.findAll().then(function(users){
      res.send(users);
    })
  },
  findAnswerById : (req,res)=>{
    models.Answer.findById(req.params.id).then(function (user) {
      res.send(user)
    })
  },
  deleteAnswer : (req,res)=>{
    models.Answer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateAnswer : (req,res)=>{
    models.Answer.update({
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
  createAnswer : (req,res)=>{
    models.Answer.create(
      {username: req.body.username,
        password: hash.generate(req.body.password),
        email: req.body.email,
        admin: req.body.admin
      }).then(function (user) {
        res.send(user)
      })
    }
  }
