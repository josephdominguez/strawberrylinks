const { Pool } = require('pg');
require('dotenv').config();

// Creates a new PostgreSQL connection pool.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Sets up function for executing SQL queries using connection pool.
const db = {
  query: async (sql, params) => {
    const result = await pool.query(sql, params);
    return result.rows;
  },
};

module.exports = db;
