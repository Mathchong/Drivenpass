import Joi, { ObjectSchema } from "joi";
import { wifisCreator } from "../types/wifis";


export const wifiSchema = Joi.object<wifisCreator>({
    title: Joi.string().max(50).required(),
    network: Joi.string().required(),
    password: Joi.string().required()
})