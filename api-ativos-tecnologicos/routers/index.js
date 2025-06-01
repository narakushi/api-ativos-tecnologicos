const organizacao = require("./routes");

module.exports = (app) => {
  app.use(organizacao);
}
