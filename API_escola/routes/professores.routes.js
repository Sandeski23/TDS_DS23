const express = require("express");
const professoresController = require("../controller/professores.controller");

const routes = new express.Router();

routes.get("/", professoresController.Procurar);
routes.get("/:id([0-9]+)", professoresController.procurarporid);
routes.post("/", professoresController.inserir);
routes.delete("/:id([0-9])+", professoresController.deletar);
routes.put("/:id([0-9]+)", professoresController.atualizar);

module.exports = routes;