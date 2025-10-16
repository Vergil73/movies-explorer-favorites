// ../routes/homepage.ejs

const { Router } = require("express");
const routes = Router();
const { homeMovies } = require('../api/ombdApi');

routes.get("/", homeMovies);

module.exports = routes;