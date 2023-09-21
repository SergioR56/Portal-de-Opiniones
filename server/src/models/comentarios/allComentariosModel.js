// Importamos la función que nos permite obtener una conexión libre con la base de datos.
const getDb = require('../../db/getDb');

// Función que se conectará a la base de datos y devolverá todos los tweets.
const allComentariosModel = async (keyword = '', userId = 0) => {
    let connection;

    try {
        connection = await getDb();

        const [comentarios] = await connection.query(
            `
                SELECT 
                    t.id,
                    t.text,
                    t.image,
                    t.userId,
                    u.username,
                    t.userId = ? AS owner,
                    COUNT(l.id) AS likes,
                    BIT_OR(l.userId = ?) AS likedByMe, 
                    t.createdAt
                FROM comentarios c
                INNER JOIN users u ON u.id = t.userId
                LEFT JOIN likes l ON l.tweetId = t.id
                WHERE u.username LIKE ? OR t.text LIKE ?
                GROUP BY t.id;
            `,
            [userId, userId, `%${keyword}%`, `%${keyword}%`]
        );

        // Modificamos el tipo de "likedByMe" y de "owner" a Boolean.
        for (const comentario of comentarios) {
            comentario.owner = Boolean(comentario.owner);
            comentario.likedByMe = Boolean(comentario.likedByMe);
        }

        return comentarios;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = allComentariosModel;
