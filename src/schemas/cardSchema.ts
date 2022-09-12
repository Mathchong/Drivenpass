import Joi, { ObjectSchema } from "joi";

export const cardSchema = Joi.object({
    title: Joi.string().max(50).required(),
    number: Joi.number().required(),
    name: Joi.string().required(),
    cvv: Joi.number().required(),
    expiration: Joi.string().required(),
    password: Joi.number().required(),
    is_virtual: Joi.boolean().required(),
    type: Joi.string().valid('credit', 'debit', 'both')
})