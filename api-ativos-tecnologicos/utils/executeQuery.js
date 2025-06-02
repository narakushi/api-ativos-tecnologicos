const conexao = require("../database/conexao.db");

class ExecuteQuery {
  createPromise(sql, params = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, params, (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      })
    })
  }
}

module.exports = new ExecuteQuery();