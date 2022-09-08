import { Request, Response, NextFunction } from "express"
import { Schema } from 'joi'

export default function schemaValidate(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details.map((err) => err.message).join(', '),
            });
        }
        next();
    }

}