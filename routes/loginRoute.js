// routes/loginRoute.js

const { Router } = require("express");
const routes = Router();

const { createAccount } = require("../controllers/loginController");


routes.get("/login", (req, res) => {
    res.render("login");
});
routes.post("/register", createAccount);



// Authentication
const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../data/databaseConnection");
const bcrypt = require("bcrypt");



module.exports = routes;