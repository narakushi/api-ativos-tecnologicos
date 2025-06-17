const ExecuteQuery = require("../utils/executeQuery");

class SolucaoModel {
  read() {
    const sql = `SELECT * from solucoes_servicos_ofertados;`;
    return ExecuteQuery.createPromise(sql);
  }

  readPerAtor(id) {
    const sql = `SELECT * from solucoes_servicos_ofertados WHERE ID_Ator_Ofertante = ?;`;
    return ExecuteQuery.createPromise(sql, id);
  }

  readOne(id) {
    const sql = `SELECT * from solucoes_servicos_ofertados WHERE ID_Solucao = ?;`;
    return ExecuteQuery.createPromise(sql, id);
  }

  create(newSolucao) {
    const sql = `INSERT INTO solucoes_servicos_ofertados SET ?;`;
    return ExecuteQuery.createPromise(sql, newSolucao);
  }

  update(updateSolution, id) {
    const sql = `UPDATE solucoes_servicos_ofertados SET ? WHERE ID_Solucao = ?`;
    return ExecuteQuery.createPromise(sql, [updateSolution, id]);
  }

  delete(id) {
    const sql = `DELETE FROM solucoes_servicos_ofertados WHERE ID_Solucao = ?`;
    return ExecuteQuery.createPromise(sql, id);
  }
}

module.exports = new SolucaoModel();