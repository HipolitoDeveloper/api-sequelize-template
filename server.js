const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const app = express();
const veiculoControllers = require("./controllers/veiculo.controller");

app.use(bodyParser.json());

require("./routes/veiculo.routes")(app, veiculoControllers);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta... ${PORT}.`);
});

//Caso o banco utilizado seja SQLITE descomentar esse bloco
// app.get("/sync", async () => {
//   const database = require("./config/db");
//   try {
//     const resultado = await database.sync();
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// });
