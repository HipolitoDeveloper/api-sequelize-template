const veiculo = require("../controllers/veiculo.controller");

module.exports = (app, rotaPai) => {
  app.post(`${rotaPai}/criar`, veiculo.criarVeiculo);
};
