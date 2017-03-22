'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.Question)
        Answer.belongsTo(models.User)
        Answer.hasMany(models.Vote)
      }
    }
  });
  return Answer;
};
