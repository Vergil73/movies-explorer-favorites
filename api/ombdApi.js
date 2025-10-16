// ./api/ombdApi.js

const axios = require('axios');
const { youtube } = require('./youtubeApi');

// axios.defaults.baseURL = 'https://www.omdbapi.com';
// axios.defaults.headers.common['Authorization'] = '8bad5f02';
// axios.defaults.timeout = 5000;

async function homeMovies(req, res){
    try{
  
        const dynamic = ["Avenger", "Netflix", "Series", "Disney", "Latest", "SuperNatural"];
        function getRandomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const random = getRandomNumber(0, 5);

        const getRequest = await axios.get(`https://www.omdbapi.com/?apikey=8bad5f02&s=${dynamic[random]}`);
        const moviesDetails =  getRequest.data.Search; 
    
        res.render('homepage', { moviesDetails });

    } catch(err){
        console.log(err);
    }
};

async function getDetails(req, res){
    try{
        const movieNameDetails = req.params.name;
        // const getRequest = await axios.get(`https://www.omdbapi.com/?apikey=8bad5f02&t=${movieNameDetails}&plot=full`);

        const getRequest = await axios.get('https://www.omdbapi.com', {
            params: {
                apikey:process.env.OMBDAPI_API_KEY,
                t: `${movieNameDetails}`,
                plot: 'full'

            }
        });

        const moviesDetails =  getRequest.data;

        const receieveData = await youtube(movieNameDetails);

        res.render('details', { moviesDetails, video: receieveData });

    } catch(err){
        console.log(err);
    }
};


async function searchMovies(req, res) {
    try{
   
        const movie = req.query.q;
        const getRequest = await axios.get(`https://www.omdbapi.com/?apikey=8bad5f02&s=${movie}`);
        const moviesDetails =  getRequest.data.Search; 
    
        res.render('searchResult', { moviesDetails, movie });

    } catch(err){
        console.log(err);
    }
}


 
module.exports = { homeMovies, getDetails, searchMovies };

