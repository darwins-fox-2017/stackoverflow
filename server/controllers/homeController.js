let db = require('../models')

module.exports = {
  index: function(req, res, next){
    db.Question.findAll({
      include: [{
        model: db.Answer,
        include: [{
          model: db.User
        }]
      }]
    }).then((questions) => {
      res.json(questions)
    })
  }
}
