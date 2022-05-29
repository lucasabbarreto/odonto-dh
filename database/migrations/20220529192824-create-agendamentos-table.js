'use strict';

module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.createTable('agendamentos',{
    id_agendamento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data_agendamento: {
      type: Sequelize.DATE,
      allowNull:false,
    },
    agendamento_confirmado: {
      type: Sequelize.BOOLEAN,
    },
    id_procedimento: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'procedimentos', key:'id_procedimento'}
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'usuarios', key:'id_usuario'}
    },      
    
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });
},

async down (queryInterface, Sequelize) {
await queryInterface.dropTable('agendamentos');
}
};
