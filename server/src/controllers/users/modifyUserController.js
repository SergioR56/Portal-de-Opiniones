const selectUserByIdModel = require("../../models/users/selectUserByIdModel"); 
const { missingFieldsError } = require("../../services/errorService");
const modifyUserModel = require("../../models/users/modifyUserModel");

const modifyUserController = async (req, res, next) => {
    try {
       
        if (!req.body.userName) {
            return missingFieldsError(res, "userName"); 
        }

        // Obtener el usuario por su id
        const user = await selectUserByIdModel(req.user.id); 

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Actualizar el nombre de usuario
        user.Name = req.body.userName;
        await modifyUserModel(user); 

        res.status(200).json({ message: "Nombre de usuario actualizado con éxito" });

    } catch (err) {
        next(err);
    }
};

module.exports = modifyUserController;
