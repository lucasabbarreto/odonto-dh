const database = require('../database/models');

const cadastroServices = {
  procurarCadastroPorEmail: async (email) => {
    const cadastro = await database.usuarios.findOne({
      where: {
        email
      }
    })
    return cadastro
  },
  procurarCadastroPorId: async (id) => {
    const cadastro = await database.usuarios.findOne({
      where: {
        id_usuario: id
      }
    })
    return cadastro
  },
  ListarCadastro: async () => {
    const cadastro = await database.usuarios.findAll();
    return cadastro;
  },
  listarDentistas: async () => {
    const dentistas = await database.usuarios.findAll({
      where: {
        permissao: 1
      }
    })
    return dentistas
  },
  CriarCadastro: async (
    nome,
    sexo,
    cpf,
    telefone,
    data_nascimento,
    email,
    senha,
    permissao,
    cep,
    endereco,
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
      data_nascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
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
    data_nascimento,
    email,
    senha,
    permissao,
    cep,
    endereco,
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
        data_nascimento,
        email,
        senha,
        permissao,
        cep,
        endereco,
        complemento,
        bairro,
        cidade,
        estado
      },
      {
        where: {
          id_usuario: id
        }
      });
    const usuarioAlterado = await database.usuarios.findOne({
      where: {
        id_usuario: id
      }
    });
    return usuarioAlterado;
  },
  atualizarNivelAcesso: async (id, permissao) => {
    await database.usuarios.update(
      {
        permissao
      }, {
      where: {
        id_usuario: id
      }
    }

    )
  },
  apagarUsuario: async (id) => {
    await database.usuarios.destroy({
      where: { id_usuario: id }
    })
  }
}

module.exports = cadastroServices;