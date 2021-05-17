module.exports = (sqlite, Sequelize, usuario, veiculo) => {
  const UsuarioVeiculo = sqlite.define("usuario_veiculo", {
    data_reservado: Sequelize.DATE,
  });
  usuario.belongsToMany(veiculo, { through: UsuarioVeiculo });
  veiculo.belongsToMany(usuario, { through: UsuarioVeiculo });

  return UsuarioVeiculo;
};
