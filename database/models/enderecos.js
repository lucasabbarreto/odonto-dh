module.exports = (sequelize, DataTypes) => {
  const enderecos = sequelize.define("enderecos", {
    id_endereco: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cep: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(10),
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
    { tableName: 'enderecos' }
  );
  return enderecos;
}