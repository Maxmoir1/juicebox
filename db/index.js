const { Client } = require('pg') // imports the pg module

const client = new Client('postgres://localhost:5432/juicebox');

async function createUser({ username, password }) {
    try {
        const { rows } = await client.query(`
      INSERT INTO users(username, password) 
      VALUES($1, $2) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [username, password]);

        return rows;
    } catch (error) {
        throw error;
    }
}

async function getAllUsers() {
    const { rows } = await client.query(`SELECT id, username FROM users;`);

    return rows;
}

module.exports = {
    client,
    createUser,
    getAllUsers,
}