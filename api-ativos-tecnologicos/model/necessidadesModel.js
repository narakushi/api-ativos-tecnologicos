const ExecuteQuery = require("../utils/executeQuery");

class NecessidadesModel {
  readPerAtor(id) {
    const sql = `SELECT * FROM necessidades_desafios_tecnologicos WHERE ID_Ator_Demandante = ?;`;
    return ExecuteQuery.createPromise(sql, id);
  }

  readOne(id) {
    const sql = `SELECT * FROM necessidades_desafios_tecnologicos WHERE ID_Necessidade = ?;`;
    return ExecuteQuery.createPromise(sql, id);
  }

  read() {
    const sql = `SELECT * FROM necessidades_desafios_tecnologicos;`;
    return ExecuteQuery.createPromise(sql);
  }

  create(newNecessidade) {
    const sql = `INSERT INTO necessidades_desafios_tecnologicos SET ?`
    return ExecuteQuery.createPromise(sql, newNecessidade);
  }

  update(updateNecessidade, id) {
    const sql = `UPDATE necessidades_desafios_tecnologicos SET ? WHERE ID_Necessidade = ?`;
    return ExecuteQuery.createPromise(sql, [updateNecessidade, id]);
  }

  delete(id) {
    const sql = `DELETE necessidades_desafios_tecnologicos WHERE ID ID_Necessidade = ?`;
    return ExecuteQuery.createPromise(sql, id);
  }
}

module.exports = new NecessidadesModel();