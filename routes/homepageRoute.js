// ../routes/homepage.ejs

const { Router } = require("express");
const routes = Router();

routes.get("/movies", (req, res) => {
    res.render("homepage");
});

module.exports = routes;