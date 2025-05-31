const { Router } = require("express");
const router = Router();

router.get("/organizacoes", (req, res) => {
  res.send("Essa é a rota de dados cadastrados da organização");
})

router.post("/organizacoes", (req, res) => {
  res.send(`Mandamos os dados para a organização `)
})

router.put("/organizacao/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Alteramos a rota dos dados da organização ${id}`)
})

router.delete("/organizacao/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Alteramos a rota dos dados da organização ${id}`)
})


module.exports = router;