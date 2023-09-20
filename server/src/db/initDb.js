require('dotenv').config();

const getDb = require('./getDb');

const main = async () => {
    let conexion;
    try {
        conexion = await getDb();

        console.log('Borrando tablas...');

        await conexion.query('DROP TABLE IF EXISTS dislikes');
        await conexion.query('DROP TABLE IF EXISTS likes');
        await conexion.query('DROP TABLE IF EXISTS posts');
        await conexion.query('DROP TABLE IF EXISTS users');

        console.log('Creando tablas...');

        await conexion.query(` 
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE NOT NULL,
                username VARCHAR(30) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await conexion.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                userId INT UNSIGNED NOT NULL,
                text VARCHAR(500) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id)
            )
        `);

        await conexion.query(`
            CREATE TABLE IF NOT EXISTS likes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                userId INT UNSIGNED NOT NULL,
                postId INT UNSIGNED NOT NULL, 
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id),
                FOREIGN KEY(postId) REFERENCES posts(id)
            )
        `);

         await conexion.query(`
            CREATE TABLE IF NOT EXISTS dislikes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                userId INT UNSIGNED NOT NULL,
                postId INT UNSIGNED NOT NULL, 
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id),
                FOREIGN KEY(postId) REFERENCES posts(id)
            )
        `);

        console.log('¡Tablas creadas!');

        
    } catch (err) {
        console.log(err);
    } finally {
        if (conexion) conexion.release();

        process.exit();
    }
};
main();
