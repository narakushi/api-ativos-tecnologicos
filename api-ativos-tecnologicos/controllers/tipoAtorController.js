const TipoAtorModel = require("../model/tipoAtorModel");

class TipoAtorController {
  async read(req, res) {
    const tipoAtoresLista = TipoAtorModel.listar();
    try {
      const tipoAtores = await tipoAtoresLista;
      return res.status(200).json(tipoAtores);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new TipoAtorController();