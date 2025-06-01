const express = require("express");
const app = express();
const port = 3000
const router = require("./routers/index");
const tabelas = require("./database/tabelas");
const conexao = require("./database/conexao.db");


//acionando conxão com banco + criação das tabelas
tabelas.init(conexao);

//acionando rotas
router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("erro", error)
    return;
  }
  console.log(`servidor rodando na porta ${port}`)
})