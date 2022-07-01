'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING(2),
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(11),
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      permissao: {
        type: Sequelize.STRING(8),
      },
      cep: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING(50),
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
