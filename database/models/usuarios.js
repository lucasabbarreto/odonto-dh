module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define("usuarios", {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING(2),
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(11),
    },
    data_nascimento: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    permissao: {
      type: DataTypes.STRING(8),
    },
    cep: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(50),
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
    { tableName: 'usuarios' }
  );

  usuarios.associate = function (models) {
    usuarios.belongsTo(models.agendamentos, {
      foreignKey: 'id_usuario',
      as: 'agendamentos'
    })
  }

  return usuarios;
}