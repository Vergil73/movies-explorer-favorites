// ./data/loginData.js

const pool = require("./databaseConnection");

async function insertNewAccount(username, email, password) {
    try {
        const { rows } = await pool.query("INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING *", [username, email, password]); 
        return rows[0]
    } catch(err){
        console.log(err);
    }
}

async function findUser(username){
    try{
        const { rows } = await pool.query("SELECT * FROM users WHERE username=1$", [username]);
        return rows[0];
    } catch(err){
        console.log(err);
    }
}

module.exports = { insertNewAccount, findUser };

