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
  }
}
