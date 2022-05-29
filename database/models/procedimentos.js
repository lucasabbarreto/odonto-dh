module.exports = (sequelize, DataTypes) =>{
    const procedimentos = sequelize.define("procedimentos",{
    id_procedimento: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull:false,
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
{  tableName:'procedimentos'}
);
    return procedimentos;
}
