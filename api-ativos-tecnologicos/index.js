const express = require("express");
const app = express();
const port = 3000
const router = require("./routers/index");
const tabelas = require("./database/tabelas");
const conexao = require("./database/conexao.db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//acionando rotas
router(app);

//acionando conxão com banco + criação das tabelas
tabelas.init(conexao);

app.listen(port, (error) => {
  if (error) {
    console.log("erro", error)
    return;
  }
  console.log(`servidor rodando na porta ${port}`)
})