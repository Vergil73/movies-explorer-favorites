// ../routes/homepage.ejs

const { Router } = require("express");
const routes = Router();
const { homeMovies } = require('../api/axiosApi');

routes.get("/", homeMovies);

module.exports = routes;