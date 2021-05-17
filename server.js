const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

require("./routes/routes")(app);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta... ${PORT}.`);
});

app.get("/sync", async () => {
  const database = require("./config/db");
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
    11;
  }
});
