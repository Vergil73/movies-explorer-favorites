// ./api/ytsApi.js

const axios = require('axios');

async function yts(req, res){
    try {
        const getRequest = await axios.get('https://yts.mx/api/v2/list_movies.json?movie_name=Vicious');
        res.render('yts', { moviesDetails: getRequest.data.data.movies });
    } catch (error) {
        console.log(error)
    }
}

module.exports = { yts };