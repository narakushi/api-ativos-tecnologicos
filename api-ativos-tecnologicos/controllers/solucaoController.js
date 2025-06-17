const SolucaoModel = require("../model/solucaoModel");

class SolucaoController {
  async readPerAtor(req, res) {
    const { id } = req.params;
    const getSolucao = SolucaoModel.readPerAtor(id);
    try {
      const solucao = await getSolucao;
      return res.status(200).json(solucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async readOne(req, res) {
    const { id } = req.params;
    const getSolucao = SolucaoModel.readOne(id);
    try {
      const solucao = await getSolucao;
      return res.status(200).json(solucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async read(req, res) {
    const getSolucao = SolucaoModel.read();
    try {
      const solucao = await getSolucao;
      return res.status(200).json(solucao);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async create(req, res) {
    const newSolucao = req.body;
    const createSolucao = SolucaoModel.create(newSolucao);
    try {
      const solucao = await createSolucao;
      return res.status(200).json(solucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updateSolucao = req.body;
    const upSolucao = SolucaoModel.update(updateSolucao, id);
    try {
      const solucao = await upSolucao;
      return res.status(200).json(solucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const deleteSolucao = SolucaoModel.delete(id);
    try {
      const solucao = await deleteSolucao;
      return res.status(200).json(solucao);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new SolucaoController();