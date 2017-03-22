'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    type: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vote.belongsTo(models.User, {foreignKey: 'userId'})
        Vote.belongsTo(models.Answer, {foreignKey: 'answerId'})
      }
    }
  });
  return Vote;
};
