const ExecuteQuery = require("../utils/executeQuery")

class TipoSolucaoModel {
  read() {
    const sql = `SELECT * from tipos_solucoes`
    return ExecuteQuery.createPromise(sql);
  }
}

module.exports = new TipoSolucaoModel();