module.exports = (sequelize, DataTypes) => {
  const agendamentos = sequelize.define("agendamentos", {
    id_agendamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data_agendamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    agendamento_confirmado: {
      type: DataTypes.BOOLEAN,
    },
    id_procedimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'procedimentos', key: 'id_procedimento' }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'usuarios', key: 'id_usuario' }
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
    { tableName: 'agendamentos' }
  );

  agendamentos.associate = function(models){
    agendamentos.hasMany(models.procedimentos,{
      foreignKey:'id_procedimento',
      as:'procedimentos'
    }),

  agendamentos.hasMany(models.usuarios,{
    foreignKey:'id_usuario',
    as:'usuarios'
  })
}



  return agendamentos;
}