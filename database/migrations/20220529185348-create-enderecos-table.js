'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos',{
      id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cep: {
        type: Sequelize.STRING(12),
        allowNull:false,
      },
      endereco: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull:false,
      },
      complemento: {
        type: Sequelize.STRING(50),
      },      
      cidade: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull:false,
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
  await queryInterface.dropTable('enderecos');
  }
};