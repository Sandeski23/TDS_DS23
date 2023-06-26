const express = require("express");
const funcionariosRoutes = require("./funcionarios.router");
const dependentesRoutes = require("./dependente.router");

const routes = new express.Router();

routes.use("/funcionarios", funcionariosRoutes);
routes.use("/dependentes", dependentesRoutes);

module.exports = routes;
