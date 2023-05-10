const alunosRepository = require("../repository/alunos.repository");

module.exports = {
    Procurar: (req, res) => {
        alunosRepository
        .Procurar()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    },
    procurarporid: (req, res) => {
        const { id } = req.params;
        alunosRepository
          .procurarporid(id)
          .then((data) => {
            res.send(data);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
    },
    inserir:(req,res) => {
        const alunos = req.body;
        
        alunosRepository
        .inserir(alunos)
        .then((data) => {
            res.send({msg:"Aluno inserido, com sucesso!", alunos})
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    },
    deletar: (req, res) => {
        const { id } = req.params;

        alunosRepository
        .deletar(id)
        .then((data) => {
            res.send({ msg: "aluno deletado da lista com sucesso"});
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    },
    atualizar: (req, res) => {
        const alunos = req.body;
        const { id } = req.params;

        alunosRepository
        .atualizar(alunos, id)
        .then( () => {
            res.send({
                msg: "aluno atualizado com sucesso",
                alunos,
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    }
    
}