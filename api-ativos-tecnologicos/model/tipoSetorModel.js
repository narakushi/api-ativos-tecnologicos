const ExecuteQuery = require("../utils/executeQuery");

class TipoSetorModel {
  read() {
    const sql = `SELECT * from setores_economicos`;
    return ExecuteQuery.createPromise(sql);
  }
}

module.exports = new TipoSetorModel();