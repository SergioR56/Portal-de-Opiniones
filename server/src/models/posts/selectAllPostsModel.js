const getDb = require('../../db/getDb');

const selectAllPostsModel = async (keyword = '', userId = 0) => {
    let conexion;

    try {
        conexion = await getDb();

        const [posts] = await conexion.query(
            `    
                SELECT 
                   p.id,
                   p.text,
                   p.userId,
                   u.username,
                   p.userId = ? AS owner,
                   COUNT(l.id) AS likes,
                   BIT_OR(l.userId = ?) AS likedByMe,
                   COUNT(d.id) AS dislikes,
                   BIT_OR(d.userId = 1) AS dislikedByMe,
                   p.createdAt
                FROM posts p
                INNER JOIN users u ON u.id = p.userId
                LEFT JOIN likes l ON l.postId = p.id
                LEFT JOIN dislikes d ON d.postId = p.id
                WHERE u.username LIKE ? OR p.text LIKE ?
                GROUP BY p.id;`,
            [userId, userId, `%${keyword}%`, `%${keyword}%`]
        );
        return posts;
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = selectAllPostsModel;
