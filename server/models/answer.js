'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.User, {foreignKey: 'userId'})
        Answer.belongsTo(models.Question, {foreignKey: 'questionId'})
      }
    }
  });
  return Answer;
};
