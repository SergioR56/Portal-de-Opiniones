
const validateSchema = async (schema, data) => {
    try {
        await schema.validateAsync(data);
    } catch (err) {
        err.status = 400;
        throw err;
    }
}

module.exports = validateSchema
