class TipoAtorController {
  read() {
    return "Buscando tipo ator."
  }
  create() {
    return "Criando tipo ator."
  }
  update(id) {
    return `Atualizando o tipo ator numero ${id}`
  }
  delete(id) {
    return `Deletando o tipo ator numero ${id}`
  }
}

module.exports = new TipoAtorController();