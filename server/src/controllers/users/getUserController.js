const selectUserByIdModel = require('../../models/users/selectUserByIdModel');



const getUserController = async (req, res, next) => {
    try {
        const user = await selectUserByIdModel(req.user.id);

        res.send({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        next(err)
    }

}

module.exports = getUserController