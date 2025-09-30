// ../routes/createAccountRoute.ejs

const Router = require("express");
const routes = Router();

routes.get("/createAccount", (req, res) => {
    res.render("createAccount"); 
});

module.exports = routes;