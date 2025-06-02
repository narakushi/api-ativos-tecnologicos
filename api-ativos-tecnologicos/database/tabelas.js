class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTipoAtores();
    this.criarAtores();
    this.criarSetores();
    this.criarTipoSolucao();
  }

  //primeiro criar tabelas auxiliares
  criarTipoAtores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS tipo_atores(
      ID_Tipo_Ator INTEGER AUTO_INCREMENT NOT NULL, 
      Nome_Tipo_Ator ENUM("Empresa", "Startup", "ICT (UNEB, IF BAIANO, FATEC), Governo Municipal, Governo Estadual, Governo Federal", 
      "Ambiente de inovação","Entidade de Apoio (Sebrae, SENAI,Associações)", "Investidor",
      "Mentor"),
      PRIMARY KEY (ID_Tipo_Ator)
    ); `;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("deu erro", error);
        return;
      }
      console.log("Tabela tipo_atores criada!");
    })
  }

  criarSetores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS setores_economicos (
      ID_Setor INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      Nome_Setor ENUM("Agroalimentar", "Recursos Florestais", "Recursos Minerais")
      );`

    try {
      this.conexao.query(sql);
      console.log("Setores economicos criada");
    }
    catch (error) {
      console.log(error.message);
    }
  }

  criarTipoSolucao() {
    const sql = `
    CREATE TABLE IF NOT EXISTS tipos_solucoes (
    ID_Tipo_Solucao INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Nome_Tipo_Solucao ENUM("Software", "Consultoria", "Hardware"));`

    try {
      this.conexao.query(sql);
      console.log("Tabela tipo_solucoes criada");
    }
    catch (error) {
      console.log("Ocorreu um erro na criação da tabela  tipo_solucoes");
    }
  }

  criarAtores() {
    const sql = `
    CREATE TABLE IF NOT EXISTS atores_ecossistema(
	  ID_Ator INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome_Oficial VARCHAR(255),
    Nome_Fantasia VARCHAR(255),
    CNPJ_CPF VARCHAR(255) UNIQUE,
    ID_Tipo_Ator INTEGER, 
	  FOREIGN KEY (ID_Tipo_Ator) REFERENCES tipo_atores(ID_Tipo_Ator)
    );
    `
    try {
      this.conexao.query(sql)
      console.log("Tabela atores_ecossistema criada");
    } catch (error) {
      console.log("Ocorreu um erro na criação da tabela atores_ecossistema.");
    }

    //definindo chave estrangeira de atores_ecossistema
    try {
      this.conexao.query("ALTER TABLE atores_ecossistema ADD CONSTRAINT fk_ID_Tipo_Ator FOREIGN KEY (ID_Tipo_Ator) REFERENCES tipo_atores(ID_Tipo_Ator);");
      console.log("Chave estrangeira definida para atores_ecossistema!");
    }
    catch (error) {
      console.log("Erro ao definir a chave estrangeira para atores_ecossistema");
    }
  }

}

module.exports = new Tabelas();