const ExecuteQuery = require("../utils/executeQuery");

class TipoAtorModel {
  listar() {
    const sql = `SELECT * FROM tipo_atores`;
    return ExecuteQuery.createPromise(sql);
  }
}

module.exports = new TipoAtorModel();