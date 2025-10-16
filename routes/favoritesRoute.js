// ./route/favoritesRoute.js

const Router = require("express");
const routes =  Router();

// routes.get('/favorites', (req, res) => {
//     res.render('favorites');
// });
      
routes.post('/favorites', (req, res) => {
    console.log("Favorites");
    res.redirect("/joe");
});

module.exports =  routes;