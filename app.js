// app.js[]
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// // Session
// const session = require("express-session");
// const passport = require("passport");

// app.use(session({
//   secret: 'YOUR_SECRET_KEY',
//   resave: false,
//   saveUninitialized: false,
// }));

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, {
//       id: user.id,
//       username: user.username,
//     });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// app.use(passport.initialize());
// app.use(passport.session());


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

// Details page
const details = require("./routes/detailsRoute");
app.use("/", details);

// Search page
const search = require("./routes/searchResultRoute");
app.use("/", search);

// Favorites 
const favorites = require("./routes/favoritesRoute");
app.use("/", favorites);

// Yts
const {yts} = require("./api/ytsApi");
app.use("/yts", yts);

// // Youtube
// const {youtube} = require("./api/youtubeApi");
// app.use("/youtube", youtube);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});




// Installed packages
// express, ejs, pg, nodemon, dotenv
// Authentication: bcrypt, (passport, passport-local, express-session, express-flash)
