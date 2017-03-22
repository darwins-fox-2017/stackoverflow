let db = require('../models')

module.exports = {
  index: function(req, res, next){
    db.Answer.findAll().then((answers) => {
      res.json(answers)
    })
  },
  create: function(req, res, next){
    db.Answer.create({
      content: req.body.content,
      userId: req.body.userId,
      questionId: req.body.questionId
    }).then(() => {
      res.json({
        success: true,
        msg: 'Answer submited'
      })
    })
  },
  show: function(req, res, next){
    db.Answer.findOne({
      where: {
        id: req.params.id
      }
    }).then((answer) => {
      if (!answer) {
        res.json({
          success: false,
          msg: 'Answer not found'
        })
      }
      res.json({
        success: true,
        data: answer,
        msg: 'Get answer success'
      })
    })
  },
  update: function(req, res, next){
    db.Answer.update({
      content: req.body.content,
    }, {
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if (!result) {
        res.json({
          success: false,
          msg: 'fail when trying to update the data'
        })
      }

      res.json({
        success: true,
        msg: 'Data updated.'
      })
    })
  },
  destroy: function(req, res, next){
    db.Answer.destroy({
      where: {
        id: req.params.id
      }
    }).then((deletedAnswer) => {
      res.json({
        success: true,
        msg: 'Answer deleted'
      })
    })
  }
}
