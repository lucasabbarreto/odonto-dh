const { request } = require('express');
const database = require('../database/models');

const cadastroServices = {
  ListarCadastro: async () => {
    const cadastro = await database.usuarios.findAll();
    return cadastro;
  },
  CriarCadastro: async (
      nome,
      sexo,
      cpf,
      telefone,
      datanascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
  ) => {
    const novoCadastro = await database.usuarios.create({
      nome,
      sexo,
      cpf,
      telefone,
      datanascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    });
    return novoCadastro;
  },

  AtualizarUsuario: async (
    id,
    nome,
    sexo,
    cpf,
    telefone,
    datanascimento,
    email,
    senha,
    permissao,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,

    ) => {
    await database.usuarios.update(
        { 
          nome,
          sexo,
          cpf,
          telefone,
          datanascimento,
          email,
          senha,
          permissao,
          cep,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          estado
        },
        {
        where:{
        id_usuario: id
      }
    });
    const usuarioAlterado = await database.usuarios.findOne({
      where: {
        id_usuario:id
      }
    });
    return usuarioAlterado;
  },
  apagarUsuario: async (id)=>{
    await database.usuarios.destroy({
      where: {id_usuario: id}
    })
  }
}

module.exports = cadastroServices;