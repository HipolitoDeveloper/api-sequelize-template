const veiculoRoute = require("../routes/veiculo.routes");
const usuarioRoute = require("../routes/veiculo.routes");

module.exports = (app) => {
  veiculoRoute(app, "/veiculo");
  usuarioRoute(app, "/usuario");
};
