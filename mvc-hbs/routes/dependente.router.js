const express = require("express");
const dependenteController = require("../controller/depentente.controller");
const { route } = require("express/lib/application");
const res = require("express/lib/response");

const routes = new express.Router();

routes.get("/", dependenteController.buscaTodos);
routes.get("/:id([0-9]+)", dependenteController.buscaPorId);
routes.post("/", dependenteController.inserir);
routes.delete("/:id([0-9]+)", dependenteController.deletar);
routes.put("/:id([0-9]+)", dependenteController.atualizar);
routes.get("/dependentes", dependenteController.buscaTodosDepDoFunc);
routes.get("/dependentes/:id([0-9]+)", dependenteController.buscaDepDoFunc);
routes.post("/dependentes", dependenteController.inserirDependentes);

routes.get("/cadastro_dependencias", (req, res) =>
  res.render("cadastro_dependencias")
);

module.exports = routes;
