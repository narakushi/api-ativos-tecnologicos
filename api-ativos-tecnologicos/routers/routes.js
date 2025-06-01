const { Router } = require("express");
const router = Router();
const TipoAtorController = require("../controllers/tipoAtorController");
const AtorController = require("../controllers/atorController");

//TipoAtores
router.get("/tipo-atores", (req, res) => {
  res.send(TipoAtorController.read());
});

router.post("/tipo-atores", (req, res) => {
  res.send(TipoAtorController.create());
});

router.put("/tipo-ator/:id", (req, res) => {
  const { id } = req.params;
  res.send(TipoAtorController.update(id));
})

router.delete("/tipo-ator/:id", (req, res) => {
  const { id } = req.params;
  res.send(TipoAtorController.delete(id));
})

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