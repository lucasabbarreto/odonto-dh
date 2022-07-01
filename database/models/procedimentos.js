module.exports = (sequelize, DataTypes) => {
  const procedimentos = sequelize.define("procedimentos", {
    id_procedimento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
    { tableName: 'procedimentos' }
  );

  procedimentos.associate = function (models) {
    procedimentos.belongsTo(models.agendamentos, {
      foreignKey: 'id_procedimento',
      as: 'agendamentos'
    })
  }


  return procedimentos;
}

