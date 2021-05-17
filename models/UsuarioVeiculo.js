const { Sequelize, DataTypes } = require("sequelize");
const Veiculo = require("Veiculo");
const Usuario = require("Usuario");
const database = require("../config/db");

const UsuarioVeiculo = database.define("usuario_veiculo", {
  data_reservado: DataTypes.DATE,
});

Usuario.belongsToMany(Veiculo, { through: UsuarioVeiculo });
Veiculo.belongsToMany(Usuario, { through: UsuarioVeiculo });

module.exports = UsuarioVeiculo;
