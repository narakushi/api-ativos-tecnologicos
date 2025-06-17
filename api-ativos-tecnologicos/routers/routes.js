const { Router } = require("express");
const router = Router();
const TipoAtorController = require("../controllers/tipoAtorController");
const AtorController = require("../controllers/atorController");
const TipoSetorController = require("../controllers/tipoSetorController");
const TipoSolucaoController = require("../controllers/tipoSolucaoController");
const NecessidadeController = require("../controllers/necessidadeController");
const SolucaoController = require("../controllers/solucaoController");

// AtoresEcossistema
router.get("/atores", AtorController.read);
router.get("/atores/:id", AtorController.readOne);
router.post("/atores", AtorController.create);
router.put("/atores/:id", AtorController.update);
router.delete("/atores/:id", AtorController.delete);


//Necessidade ou desafio
router.get("/necessidades", NecessidadeController.read);
router.get("/necessidades/ator_demandante/:id", NecessidadeController.readPerAtor);
router.post("/necessidades/ator_demandante", NecessidadeController.create);
router.get("/necessidades/:id", NecessidadeController.readOne);

router.put("/necessidades/:id", NecessidadeController.update);
router.delete("/necessidades/:id", NecessidadeController.delete);

//Soluções ou serviços ofertados
router.get("/solucoes", SolucaoController.read);
router.get("/solucoes/ator_ofertante/:id", SolucaoController.readPerAtor);
router.post("/solucoes/ator_ofertante", SolucaoController.create);
router.get("/solucoes/:id", SolucaoController.readOne);

router.put("/solucoes/:id", SolucaoController.update);
router.delete("/solucoes/:id", SolucaoController.delete);

//Tabelas auxiliares - para recuperação

//TipoAtores
router.get("/tipo-atores", TipoAtorController.read);

//setores_economicos
router.get("/setores-economicos", TipoSetorController.read);

//tipo_solucoes
router.get("/tipo-solucoes", TipoSolucaoController.read);

module.exports = router;