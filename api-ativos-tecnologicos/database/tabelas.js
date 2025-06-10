class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTipoAtores();
    this.criarSetores();
    this.criarTipoSolucao();
    this.criarAtores();
    this.criarNecessidades();
  }

  //primeiro criar tabelas auxiliares
  criarTipoAtores() {
    const sql = `
      CREATE TABLE IF NOT EXISTS tipos_atores(
      ID_Tipo_Ator INTEGER AUTO_INCREMENT NOT NULL, 
      Nome_Tipo_Ator ENUM("Empresa", "Startup", "ICT (UNEB, IF BAIANO, FATEC)", "Governo Municipal", "Governo Estadual", "Governo Federal", 
      "Ambiente de inovação","Entidade de Apoio (Sebrae, SENAI, Associações)", "Investidor",
      "Mentor") DEFAULT "Empresa",
      PRIMARY KEY (ID_Tipo_Ator)); 
      `;

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
       "Comércio", "Serviços", "Indústria Geral", "Educação", "Saúde") DEFAULT "Agroalimentar"
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
    "Propriedade Intelectual (Patente, Marca, Software Registrado)") DEFAULT "Software");
    `

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
    Setores_Secundarios_Atuacao ENUM("Agroalimentar", "Recursos Florestais", "Recursos Minerais", "TI e Automação",
       "Comércio", "Serviços", "Indústria Geral", "Educação", "Saúde"),
    Porte ENUM("Micro", "Pequena", "Média", "Grande", "Startup", "Sem Fins Lucrativos") DEFAULT "Micro",
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
    Data_Cadastro_BD TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP NOT NULL,
    Status_Ator ENUM("Ativo", "Inativo", "Prospect") DEFAULT "Ativo",
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
  }

  criarNecessidades() {
    const sql = `
    CREATE TABLE IF NOT EXISTS Necessidades_Desafios_Tecnologicos (
    ID_Necessidade INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ID_Ator_Demandante INT,
    Titulo_Necessidade_Desafio VARCHAR (255) NOT NULL,
    Descricao_Detalhada_Necessidade VARCHAR (255) NOT NULL,
    Setor_Impactado_Internamente INT,
        FOREIGN KEY (Setor_Impactado_Internamente) REFERENCES setores_economicos (ID_Setor),
    Tipo_Solucao_Buscada INT,
        FOREIGN KEY (Tipo_Solucao_Buscada) REFERENCES tipos_solucoes (ID_Tipo_Solucao),
    Tecnologias_Desejadas VARCHAR (255),
    Resultados_Esperados VARCHAR (255) NOT NULL,
    Urgencia_Necessidade ENUM("Baixa (até 1 ano)", "Média (até 6 meses)", "Alta (até 3 meses)", "Crítica (até 1 mês)") NOT NULL,
    Disposicao_Investimento ENUM("Buscando Parceria", "Orçamento Definido (faixa)", "Aberto a Propostas", "Buscando Fomento"),
    Status_Necessidade ENUM("Aberta", "Em Prospecção de Soluções", "Solução em Desenvolvimento", "Atendida", "Cancelada") NOT NULL,
    Palavras_Chave_Necessidade VARCHAR (255) NOT NULL,
    Data_Registro_Necessidade TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    Data_Ultima_Atualizacao_Status TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);
    `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro na criação da tabela necessidades");
        return;
      }
      console.log("Operação bem sucedida na criação da tabela necessidades");
    });
  }

}

module.exports = new Tabelas();