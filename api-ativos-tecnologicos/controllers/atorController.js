const AtorModel = require("../model/atorModel");

class AtorController {
  async read(req, res) {
    const getAtor = AtorModel.read();
    try {
      const atorEco = await getAtor;
      return res.status(200).json(atorEco);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async readOne(req, res) {
    const { id } = req.params;
    const atorOne = AtorModel.readOne(id);
    try {
      const ator = await atorOne;
      return res.status(200).json(ator);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async create(req, res) {
    const newAtor = req.body;
    const createAtor = AtorModel.create(newAtor);
    try {
      const ator = await createAtor;
      return res.status(201).json(ator);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedAtor = req.body;
    const upAtor = AtorModel.update(updatedAtor, id);
    try {
      const ator = await upAtor
      return res.status(200).json(ator);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const deleteAtor = AtorModel.delete(id)
    try {
      const ator = await deleteAtor;
      return res.status(200).json(ator)
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new AtorController();