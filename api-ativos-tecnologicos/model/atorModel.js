const ExecuteQuery = require("../utils/executeQuery");

class AtorModel {
  read() {
    const sql = `SELECT * from atores_ecossistema`;
    return ExecuteQuery.createPromise(sql);
  }

  readOne(id) {
    const sql = `SELECT * from atores_ecossistema WHERE ID_Ator = ?`;
    return ExecuteQuery.createPromise(sql, id);
  }

  create(newAtor) {
    const sql = `INSERT INTO atores_ecossistema SET ?`;
    return ExecuteQuery.createPromise(sql, newAtor);
  }

  update(upAtor, id) {
    const sql = `UPDATE atores_ecossistema SET ? WHERE ID_Ator = ?`;
    return ExecuteQuery.createPromise(sql, [upAtor, id]);
  }

  delete(id) {
    const sql = `DELETE FROM atores_ecossistema WHERE ID_Ator = ?`;
    return ExecuteQuery.createPromise(sql, id);
  }

}

module.exports = new AtorModel();