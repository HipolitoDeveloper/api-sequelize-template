const { Sequelize, DataTypes } = require("sequelize");
const database = require("../config/db");

const Veiculo = database.define("veiculo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reservado: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Veiculo;
