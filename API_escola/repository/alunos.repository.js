const con = require("../mysql-connection");

module.exports = {
    Procurar: () => {
        return con.select().from("alunos");
    },
    procurarporid: (id) => {
        return con.select().from("alunos").where("id", "=", id);
    },
    inserir: (alunos) => {
        return con.insert(alunos).into("alunos");
    },
    deletar:( id ) => {
        return con("alunos")
        .where({ id: id})
        .del();
    },
    atualizar: (alunos, id) => {
        return con("alunos")
        .update(alunos)
        .where({id : id});
    },
}