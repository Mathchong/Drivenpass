import Joi, { ObjectSchema } from "joi";
import { notesCreation } from "../types/notes";

export const noteSchema = Joi.object<notesCreation>({
    title: Joi.string().max(50).required(),
    annotation: Joi.string().max(1000).required()
})