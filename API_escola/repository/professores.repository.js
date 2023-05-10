const con = require("../mysql-connection");

module.exports = {
    Procurar: () => {
        return con.select().from("professores");
    },
    procurarporid: (id) => {
        return con.select().from("professores").where("id", "=", id);
    },
    inserir: (professores) => {
        return con.insert(professores).into("professores");
    },
    deletar:( id ) => {
        return con("professores")
        .where({ id: id})
        .del();
    },
    atualizar: (professores, id) => {
        return con("professores")
        .update(professores)
        .where({id : id});
    }
}