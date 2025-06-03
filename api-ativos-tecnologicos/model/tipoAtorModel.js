const ExecuteQuery = require("../utils/executeQuery");

class TipoAtorModel {
  read() {
    const sql = `SELECT * FROM tipos_atores`;
    return ExecuteQuery.createPromise(sql);
  }
}

module.exports = new TipoAtorModel();