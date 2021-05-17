const sequelize = require("../config/db.js");
const Sequelize = require("sequelize");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.veiculoModel = require("./Veiculo")(sequelize, Sequelize);
db.usuarioModel = require("./Usuario")(sequelize, Sequelize);
db.usuarioVeiculoModel = require("./UsuarioVeiculo")(
  sequelize,
  Sequelize,
  db.usuarioModel,
  db.veiculoModel
);

module.exports = db;
