// /routes/detailsRoute.js

const { Router } = require("express");
const routes = Router();

const { getDetails } = require('../api/ombdApi');

routes.get("/movies/:name", getDetails);

module.exports = routes;
  
