'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('replies','message_id', {
      allowNull:false,
      type:Sequelize.INTEGER,
      references:{
        model:'messages',
        key:'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('replies','message_id');
  }
};
