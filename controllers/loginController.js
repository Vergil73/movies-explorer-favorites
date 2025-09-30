// ../coontrollers/loginControllers.js
const bcrypt = require("bcrypt");
const { insertNewAccount } = require("../data/loginData");


// Creates new Account
async function createAccount(req, res) {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const username = req.body.username;
        const email = req.body.email;
        await insertNewAccount(username, email, hashedPassword);
        res.redirect("/login");
    } catch(err) {
        res.redirect("/createAccount");
        console.log("Error: ", err);
    }
}


module.exports = { createAccount };

// Authentication: bcrypt, (passport, passport-local, express-session, express-flash)
