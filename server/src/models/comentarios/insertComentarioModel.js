// Importamos la función que nos permite obtener una conexión libre con la base de datos.
const getDb = require('../../db/getDb');

// Función que se conectará a la base de datos y creará un tweet.
const insertComentarioModel = async (text, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [comentario] = await connection.query(
            `INSERT INTO comentarios(text, userId) VALUES(?, ?)`,
            [text, userId]
        );

        // Retornamos el id del tweet que acabamos de insertar.
        return comentario.insertId;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertComentarioModel;
