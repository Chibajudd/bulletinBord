'use strict';
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define('reply', {
    content: DataTypes.STRING
  }, {
    underscored: true,
  });
  reply.associate = function(models) {
    // associations can be defined here
  };
  return reply;
};