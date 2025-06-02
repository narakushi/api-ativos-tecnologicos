const TipoSolucaoModel = require("../model/tipoSolucaoModel");

class TipoSolucaoController {
  async read(req, res) {
    const getTipoSolucao = TipoSolucaoModel.read();
    try {
      const tipoSolucao = await getTipoSolucao;
      return res.status(200).json(tipoSolucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new TipoSolucaoController();