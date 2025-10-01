// app.js[]

const express = require("express");
const app = express();
const PORT = 3000;

const passport = require("passport");



// Setup for views
app.set('views', './views');
app.set('view engine', 'ejs');

// Setup for public
app.use(express.static('public'));

// Parse from data into request body
app.use(express.urlencoded({extended:true}));

// Login page
const login = require("./routes/authenticationRoute");
app.use("/", login);

// Homepage
const homepage = require("./routes/homepageRoute");
app.use("/", homepage);

// Authenticating the user
// app.use(passport.initialize());
// app.use(passport.session()); 



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});




// Installed packages
// express, ejs, pg, nodemon, dotenv
// Authentication: bcrypt, (passport, passport-local, express-session, express-flash)
