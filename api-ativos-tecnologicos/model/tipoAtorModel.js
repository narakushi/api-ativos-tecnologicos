const conexao = require("../database/conexao.db");

class TipoAtorModel {
  executeQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      })
    })
  }

  listar() {
    const sql = `SELECT * FROM tipo_atores`;
    return this.executeQuery(sql);
  }


}

module.exports = new TipoAtorModel();