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
    celular: {
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'enderecos', key: 'id_endereco' },
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
  return usuarios;
}