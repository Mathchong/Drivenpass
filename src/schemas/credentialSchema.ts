import Joi, { ObjectSchema } from "joi";
import { credentialsCreator } from "../types/credentials";

//TODO create regex for url validation
export const credentialSchema = Joi.object<credentialsCreator>({
    title: Joi.string().max(50).required(),
    url: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})