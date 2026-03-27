const Joi = require("joi");

const hashSchema = Joi.object({
    password: Joi.string().required(),
    hash: Joi.string().required(),
});

module.exports = hashSchema;
