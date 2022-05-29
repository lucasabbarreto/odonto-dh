'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios',{
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      sexo: {
        type: Sequelize.STRING(2),
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull:false,
      },
      telefone: {
        type: Sequelize.STRING(11),
      },      
      celular: {
        type: Sequelize.STRING(11),
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      senha: {
        type: Sequelize.STRING(8),
        allowNull:false,
      },
      permissao:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model:'enderecos', key: 'id_endereco'},
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
  await queryInterface.dropTable('usuarios');
  }
};
