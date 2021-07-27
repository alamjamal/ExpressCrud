const Joi = require('joi');

function customerValidate(data) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(4).max(20).required(),
        password: Joi.string().min(5).max(20).required(),
        isPurchased: Joi.boolean(),
    });
    return schema.validate(data);
}
module.exports=customerValidate;