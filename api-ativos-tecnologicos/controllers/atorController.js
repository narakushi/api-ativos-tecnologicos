class AtorController {

  read() {
    return "Buscando ator"
  }

  create() {
    return "Criando ator"
  }

  update(id) {
    return `Atualizando o ator de id ${id}`
  }

  delete(id) {
    return `Deletando o ator de id ${id}`
  }
}

module.exports = new AtorController();