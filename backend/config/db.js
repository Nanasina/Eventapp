const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "hazina",
    database: "eventapp_db",
    port: 5433,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};