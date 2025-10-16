// ./routes/searchResultRoute.js

const Router = require("express");
const routes = Router();

const { searchMovies } = require('../api/ombdApi');
routes.get("/movies", searchMovies);

module.exports = routes;