'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    vote: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    AnswerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vote.belongsTo(models.User)
        Vote.belongsTo(models.Answer)
      }
    }
  });
  return Vote;
};
