const express = require("express");
const alunosRoutes = require("./alunos.routes");
const professoresRoutes = require("./professores.routes");
const turmasRoutes = require("./turmas.routes");

const routes = new express.Router();

routes.use("/alunos", alunosRoutes);
routes.use("/professores", professoresRoutes);
routes.use("/turmas", turmasRoutes);

module.exports = routes;