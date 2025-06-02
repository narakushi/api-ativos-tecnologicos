const { Router } = require("express");
const router = Router();
const TipoAtorController = require("../controllers/tipoAtorController");
const AtorController = require("../controllers/atorController");
const TipoSetorController = require("../controllers/tipoSetorController");
const TipoSolucaoController = require("../controllers/tipoSolucaoController");

// AtoresEcossistema
router.get("/atores", AtorController.read);
router.post("/atores", AtorController.create);
router.put("/atores/:id", AtorController.update);
router.delete("/atores/:id", AtorController.delete);


//Tabelas auxiliares - para recuperação

//TipoAtores
router.get("/tipo-atores", TipoAtorController.read);

//setores_economicos
router.get("/setores-economicos", TipoSetorController.read);

//tipo_solucoes
router.get("/tipo-solucoes", TipoSolucaoController.read);

module.exports = router;