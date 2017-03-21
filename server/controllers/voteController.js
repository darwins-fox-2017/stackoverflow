var models = require('../models')

module.exports = {

  downVote : (req,res)=>{
    models.Vote.destroy({
      where: {
        UserId: req.params.userid
      }
    }).then(function(){
      res.send(`vote has been deleted for id ${req.params.id}`)
    })
  }
  upVote : (req,res)=>{
    models.Vote.create(
      {vote: true,
       UserId: req.body.userid,
        AnswerId: req.body.answerid
      }).then(function (vote) {
        res.send(vote)
      })
    }
  }
