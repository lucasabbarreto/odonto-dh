const database = require('../database/models');

const cadastroServices = {
  ListarCadastro: async () => {
    const cadastro = await database.cadastro.findAll();
    return cadastro;
  },
  ProcurarCadastro: async (cadastro) => {
   
    const nomeCadastro = await database.cadastro.findOne({
      where: {
        nome:cadastro
      }
    });
    return nomeCadastro;
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
    const usuario = await database.usuarios.update(
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
          estado,

        },
        {
        where:{
        id_usuario:id
      }
    });
    return usuario;
  },
}

module.exports = cadastroServices;