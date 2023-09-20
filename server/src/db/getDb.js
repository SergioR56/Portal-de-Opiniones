

const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

let pool;

const getDb = async () => {
    try {
        if (!pool) {
            const conexion = await mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                timezone: 'Z',
            });

            await conexion.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);

            pool = mysql.createPool({
                connectionLimit: 10,
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_NAME,
                timezone: 'Z',
            });
        }

        return await pool.getConnection();
    } catch (err) {
        console.log(err);
    }
};

module.exports = getDb;
