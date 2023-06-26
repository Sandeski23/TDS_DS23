const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("dependente").orderByRaw("id desc");
  },
  buscaPorId: (id) => {
    return con.select().from("dependentes").where("id", "=", id);
  },
  inserir: (dependentes) => {
    return con.insert(dependentes).into("dependentes");
  },
  deletar: (id) => {
    return con("dependentes").where({ id: id }).del();
  },
  atualizar: (dependentes, id) => {
    return con("dependentes").update(dependentes).where({ id: id });
  },
  buscaTodosDepDoFunc: () => {
    return con("dependentes").innerJoin(
      "dependentes",
      "dependentes.id",
      "dependentes.funcionario_id"
    );
  },
  buscaDepDoFunc: (id) => {
    return con
      .select(
        "FUN.ID",
        "FUN.NOME AS NOME_FUNCIONARIO",
        "DEP.NOME AS NOME_DEPENDENTE",
        "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
      )
      .from("dependentes AS FUN")
      .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
      .where("FUN.ID", id);
  },
  inserirDependentes: (parametro) => {
    return con.insert(parametro).into("dependentes");
  },
};
