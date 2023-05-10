const professoresRepository = require("../repository/professores.repository");

module.exports = {
    Procurar: (req, res) => {
        professoresRepository
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
        professoresRepository
          .procurarporid(id)
          .then((data) => {
            res.send(data);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
    },
    inserir:(req,res) => {
        const professores = req.body;
        
        professoresRepository
        .inserir(professores)
        .then((data) => {
            res.send({msg:"Professores inserido, com sucesso!", professores})
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    },
    deletar: (req, res) => {
        const { id } = req.params;

        professoresRepository
        .deletar(id)
        .then((data) => {
            res.send({ msg: "Professores deletado da lista com sucesso"});
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    },
    atualizar: (req, res) => {
        const professores = req.body;
        const { id } = req.params;

        professoresRepository
        .atualizar(professores, id)
        .then( () => {
            res.send({
                msg: "Professores atualizado com sucesso",
                professores,
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    }
    
}