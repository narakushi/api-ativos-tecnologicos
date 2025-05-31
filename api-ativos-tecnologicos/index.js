const express = require("express");
const app = express();
const port = 3000
const router = require("./routers/index");

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("erro", error)
    return;
  }
  console.log(`servidor rodando na porta ${port}`)
})