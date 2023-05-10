const con = require("../mysql-connection");

module.exports = {
    Procurar: () => {
        return con.select().from("turmas");
    },
    procurarporid: (id) => {
        return con.select().from("turmas")
        .innerJoin("alunos", "alunos.ID", "turmas.ALUNO_ID")
        .innerJoin("professores", "professores.ID", "turmas.PROFESSORES_ID")
    },
    inserir: (turmas) => {
        return con.insert(turmas).into("turmas");
    },
    deletar:( id ) => {
        return con("turmas")
        .where({ id: id})
        .del();
    },
    atualizar: (turmas, id) => {
        return con("turmas")
        .update(turmas)
        .where({id : id});
    }
}