const organizacao = require("./organizacao.routes");

module.exports = (app) => {
  app.use(organizacao);
}
