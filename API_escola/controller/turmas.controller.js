const turmasRepository = require("../repository/turmas.repository");

module.exports = {
    Procurar: (req, res) => {
        turmasRepository
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
        turmasRepository
          .procurarporid(id)
          .then((data) => {
            res.send(data);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
    },
    inserir:(req,res) => {
        const turmas = req.body;
        
        turmasRepository
        .inserir(turmas)
        .then((data) => {
            res.send({msg:"turmas inserido, com sucesso!", turmas})
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    },
    deletar: (req, res) => {
        const { id } = req.params;

        turmasRepository
        .deletar(id)
        .then((data) => {
            res.send({ msg: "turmas deletado da lista com sucesso"});
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    },
    atualizar: (req, res) => {
        const turmas = req.body;
        const { id } = req.params;

        turmasRepository
        .atualizar(turmas, id)
        .then( () => {
            res.send({
                msg: "turmas atualizado com sucesso",
                turmas,
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    }
    
}