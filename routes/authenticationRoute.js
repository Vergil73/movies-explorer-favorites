// routes/loginRoute.js

const { Router } = require("express");
const routes = Router();

const { createAccount } = require("../controllers/loginController");

// Login page
routes.get("/login", (req, res) => {
    res.render("login");
});

// Create New Account
routes.get("/createAccount", (req, res) => {
    res.render("createAccount"); 
});
routes.post("/register", createAccount);


// Authentication
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const pool = require("../data/databaseConnection");

passport.use(new LocalStrategy(async (username, password, done) => {

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = rows[0];
    if (!user) {

      return done(null, false, { message: 'Incorrect username.' });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
        } catch (err) {
          return done(err);
        }
     } 
    )
  ) 
        
routes.post('/login/signingUp', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = routes;