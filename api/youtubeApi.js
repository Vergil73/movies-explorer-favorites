// ./api/youtubeApi.js

const axios = require('axios');

async function youtube(movieName){
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: process.env.YOUTUBE_API_KEY,
                q: `${movieName} Official Trailer`,
                part: 'snippet',
                type: 'video',
                maxResults: 1
            }
        });

        const data = response.data;
        return data.items[0];

    } catch (error){
        console.log("Error in Youtube API", error);
    }
}



module.exports = { youtube };