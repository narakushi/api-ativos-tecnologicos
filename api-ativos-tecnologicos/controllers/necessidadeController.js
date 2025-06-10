const NecessidadesModel = require("../model/necessidadesModel");

class NecessidadeController {
  async readPerAtor(req, res) {
    const { id } = req.params;
    const getNecessidades = NecessidadesModel.readPerAtor(id);
    try {
      const necessidade = await getNecessidades;
      return res.status(200).json(necessidade);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async readOne(req, res) {
    const { id } = req.params;
    const getNecessidades = NecessidadesModel.readOne(id);
    try {
      const necessidade = await getNecessidades;
      return res.status(200).json(necessidade);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async read(req, res) {
    const getNecessidades = NecessidadesModel.read();
    try {
      const necessidade = await getNecessidades;
      return res.status(200).json(necessidade);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async create(req, res) {
    const newNecessidade = req.body;
    const createNecessidades = NecessidadesModel.create(newNecessidade);
    try {
      const necessidade = await createNecessidades;
      return res.status(200).json(necessidade);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updateNecessidade = req.body;
    const upNecessidade = NecessidadesModel.update(updateNecessidade, id);
    try {
      const necessidade = await upNecessidade;
      return res.status(200).json(necessidade);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const deleteNecessidade = NecessidadesModel.delete(id);
    try {
      const necessidade = await deleteNecessidade;
      return res.status(200).json(necessidade);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new NecessidadeController()