const express = require("express");
const turmasController = require("../controller/turmas.controller");

const routes = new express.Router();

routes.get("/", turmasController.Procurar);
routes.get("/:id([0-9]+)", turmasController.procurarporid);
routes.post("/", turmasController.inserir);
routes.delete("/:id([0-9])+", turmasController.deletar);
routes.put("/:id([0-9]+)", turmasController.atualizar);

module.exports = routes;