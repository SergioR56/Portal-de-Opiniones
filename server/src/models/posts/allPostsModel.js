// Importamos la función que nos permite obtener una conexión libre con la base de datos.
const getDb = require('../../db/getDb');

// Función que se conectará a la base de datos y devolverá todos los posts.
const allPostsModel = async () => {
    let connection;

    try {
        connection = await getDb();

        const [posts] = await connection.query(
            `
                SELECT 
                    posts.id,
                    posts.text,
                    posts.userId,
                    u.username,
                    posts.createdAt
                FROM posts
                INNER JOIN users u ON u.id = posts.userId
                GROUP BY posts.id;
            `
        );

        // Modificamos el tipo de "likedByMe" y de "owner" a Boolean.
        for (const post of posts) {
            post.owner = Boolean(post.owner);
            // post.likedByMe = Boolean(post.likedByMe);
        }

        return posts;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = allPostsModel;



// // Importamos la función que nos permite obtener una conexión libre con la base de datos.
// const getDb = require('../../db/getDb');

// // Función que se conectará a la base de datos y devolverá todos los posts.
// const allPostsModel = async (keyword = '', userId = 0) => {
//     let connection;

//     try {
//         connection = await getDb();

//         const [posts] = await connection.query(
//             `
//                 SELECT 
//                 posts.id,
//                 posts.text,
//                 posts.userId,
//                     u.username,
//                     posts.createdAt
//                 FROM posts c
//                 INNER JOIN users u ON u.id = posts.userId
//                 WHERE u.username LIKE ? OR posts.text LIKE ?
//                 GROUP BY posts.id;
//             `,
//             [userId, userId, `%${keyword}%`, `%${keyword}%`]
//         );

//         // Modificamos el tipo de "likedByMe" y de "owner" a Boolean.
//         for (const post of posts) {
//             post.owner = Boolean(post.owner);
//             // post.likedByMe = Boolean(post.likedByMe);
//         }

//         return posts;
//     } finally {
//         if (connection) connection.release();
//     }
// };

// module.exports = allPostsModel;
