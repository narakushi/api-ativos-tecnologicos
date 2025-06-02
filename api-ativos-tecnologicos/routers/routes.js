const { Router } = require("express");
const router = Router();
const TipoAtorController = require("../controllers/tipoAtorController");
const AtorController = require("../controllers/atorController");

//TipoAtores
router.get("/tipo-atores", TipoAtorController.read); //tabela auxiliar só precisa de get. 

// Organizações
router.get("/organizacoes", (req, res) => {
  res.send(AtorController.read());
})

router.post("/organizacoes", (req, res) => {
  res.send(AtorController.create())
})

router.put("/organizacao/:id", (req, res) => {
  const { id } = req.params;
  res.send(AtorController.update(id))
})

router.delete("/organizacao/:id", (req, res) => {
  const { id } = req.params;
  res.send(AtorController.delete(id))
})

module.exports = router;