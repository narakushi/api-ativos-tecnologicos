const TipoSetorModel = require("../model/tipoSetorModel");

class TipoSetorController {
  async read(req, res) {
    const getSetor = TipoSetorModel.read();
    try {
      const setor = await getSetor;
      return res.status(200).json(setor);
    }
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new TipoSetorController();