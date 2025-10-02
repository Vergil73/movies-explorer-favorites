// ./data/loginData.js

const pool = require("./databaseConnection");

async function insertNewAccount(username, email, password) {
    try {
        const { rows } = await pool.query("INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING *", [username, email, password]); 
        return rows[0];
    } catch(err){
        console.log(err);
    }
}

module.exports = { insertNewAccount };

