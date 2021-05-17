module.exports = (app, veiculo) => {
  const rotaPai = "/veiculo";

  app.post(`${rotaPai}/criar`, veiculo.criarVeiculo);
};
