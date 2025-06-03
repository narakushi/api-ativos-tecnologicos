class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTipoAtores();
    this.criarSetores();
    this.criarTipoSolucao();
    this.criarAtores();
  }

  //primeiro criar tabelas auxiliares
  criarTipoAtores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS tipos_atores(
      ID_Tipo_Ator INTEGER AUTO_INCREMENT NOT NULL, 
      Nome_Tipo_Ator ENUM("Empresa", "Startup", "ICT (UNEB, IF BAIANO, FATEC)", "Governo Municipal", "Governo Estadual", "Governo Federal", 
      "Ambiente de inovação","Entidade de Apoio (Sebrae, SENAI, Associações)", "Investidor",
      "Mentor"),
      PRIMARY KEY (ID_Tipo_Ator)
    ); `;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("deu erro", error);
        return;
      }
      console.log("Tabela tipos_atores criada!");
    })
  }

  criarSetores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS setores_economicos (
      ID_Setor INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      Nome_Setor ENUM("Agroalimentar", "Recursos Florestais", "Recursos Minerais", "TI e Automação",
       "Comércio", "Serviços", "Indústria Geral", "Educação", "Saúde")
      );`

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error.message)
        return;
      }
      console.log("tabela de setores criada.");
    });
  }

  criarTipoSolucao() {
    const sql = `
    CREATE TABLE IF NOT EXISTS tipos_solucoes (
    ID_Tipo_Solucao INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Nome_Tipo_Solucao ENUM("Software", "Aplicativo Móvel", "Plataforma SaaS", "Hardware", "Consultoria Tecnológica", "Capacitação Técnica", 
    "Produto Físico Inovador", "Processo Inovador", 
    "Propriedade Intelectual (Patente, Marca, Software Registrado)"));`

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("deu erro", error);
        return;
      }
      console.log("Tabela tipo solucao criada.");
    })
  }

  criarAtores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS atores_ecossistema (
    ID_Ator INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nome_Oficial VARCHAR (255) NOT NULL,
    Nome_Fantasia VARCHAR (255),
    CNPJ_CPF VARCHAR (30) UNIQUE,
    Tipo_Ator INT,
        FOREIGN KEY (Tipo_Ator) REFERENCES tipos_atores (ID_Tipo_Ator),
    Setor_Principal_Atuacao INT,
        FOREIGN KEY (Setor_Principal_Atuacao) REFERENCES Setores_Economicos (ID_Setor),
    Setores_Secundarios_Atuacao VARCHAR (255) NOT NULL,
    Porte ENUM("Micro", "Pequena", "Média", "Grande", "Startup", "Sem Fins Lucrativos") NOT NULL,
    Descricao_Atividades VARCHAR (255) NOT NULL,
    Ano_Fundacao INT NOT NULL,
    Endereco_Logradouro VARCHAR (255) NOT NULL,
    Endereco_Numero VARCHAR (30) NOT NULL,
    Endereco_Complemento VARCHAR (255),
    Endereco_Bairro VARCHAR (255) NOT NULL,
    Endereco_Cidade VARCHAR (255) NOT NULL,
    Endereco_UF VARCHAR (30) NOT NULL,
    Endereco_CEP VARCHAR (30) NOT NULL,
    Telefone_Principal VARCHAR (30) NOT NULL,
    Email_Principal VARCHAR (255) NOT NULL,
    Website VARCHAR (255),
    Redes_Sociais VARCHAR (255),
    Nome_Contato_Principal VARCHAR (255) NOT NULL,
    Cargo_Contato_Principal VARCHAR (255) NOT NULL,
    Email_Contato_Principal VARCHAR (255) NOT NULL,
    Telefone_Contato_Principal VARCHAR (30) NOT NULL,
    Data_Cadastro_BD DATETIME,
    Status_Ator ENUM("Ativo", "Inativo", "Prospect"),
    Origem_Cadastro VARCHAR (255) NOT NULL,
    Observacoes_Gerais VARCHAR (255));
    `
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("deu erro", error);
        return;
      }
      console.log("Tabela de atores criada.");
    })

    //definindo chave estrangeira de atores_ecossistema

    this.conexao.query("ALTER TABLE atores_ecossistema ADD CONSTRAINT fk_ID_Tipo_Ator FOREIGN KEY (Tipo_Ator) REFERENCES tipos_atores(ID_Tipo_Ator);", (error) => {
      if (error) {
        console.log(error.message);
        return
      }
      console.log("Chave estrangeira definida para atores ecossistema")
    });

  }

}

module.exports = new Tabelas();