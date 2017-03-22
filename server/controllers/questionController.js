let db = require('../models')

module.exports = {
  index: function(req, res, next){
    db.Question.findAll().then((questions) => {
      res.json(questions)
    })
  },
  create: function(req, res, next){
    db.Question.create({
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      user_id: req.body.user_id
    }).then(() => {
      res.json({
        success: true,
        msg: 'Question submited'
      })
    })
  },
  show: function(req, res, next){
    db.Question.findOne({
      where: {
        id: req.params.id
      }
    }).then((question) => {
      if (!question) {
        res.json({
          success: false,
          msg: 'Question not found'
        })
      }
      res.json({
        success: true,
        data: question,
        msg: 'Get question success'
      })
    })
  },
  update: function(req, res, next){
    db.Question.update({
      title: req.body.title,
      slug: req.body.slug,
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
    db.Question.destroy({
      where: {
        id: req.params.id
      }
    }).then((deletedQuestion) => {
      res.json({
        success: true,
        msg: 'Question deleted'
      })
    })
  }
}
