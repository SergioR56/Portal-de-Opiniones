require('dotenv').config();

const getDb = require('./getDb');

const main = async () => {
    let conexion;
    try {
        conexion = await getDb();

        console.log('Creando tablas...');

        await conexion.query();
    } catch (err) {
        console.log(err);
    } finally {
        if (conexion) conexion.release();

        process.exit();
    }
};
main();
