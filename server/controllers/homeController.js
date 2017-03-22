let db = require('../models')

module.exports = {
  index: function(req, res, next){
    db.Question.findAll().then((questions) => {
      res.json(questions)
    })
  }
}
