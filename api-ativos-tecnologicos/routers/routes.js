const { Router } = require("express");
const router = Router();
const TipoAtorController = require("../controllers/tipoAtorController");
const AtorController = require("../controllers/atorController");

//TipoAtores
router.get("/tipo-atores", TipoAtorController.read); //tabela auxiliar só precisa de get. 

// AtoresEcossistema
router.get("/atores", AtorController.read);
router.post("/atores", AtorController.create);
router.put("/atores/:id", AtorController.update);
router.delete("/atores/:id", AtorController.delete);

module.exports = router;