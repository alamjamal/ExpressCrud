const Joi = require('joi');

function courseValidate(data) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        // name:Joi.number(),
        category:Joi.string(),
        author:Joi.string(),
        tags:Joi.array(),
        date:Joi.date(),
        isPublished: Joi.boolean(),
        price: Joi.number().min(10).max(1000).required()
    });
    return schema.validate(data);
}
module.exports=courseValidate;