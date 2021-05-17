const sequelize = require("../config/db.js");
const Sequelize = require("sequelize");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.veiculoModel = require("./Veiculo")(sequelize, Sequelize);

module.exports = db;
