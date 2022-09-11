import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import "../app/config"

export function validateJWT() {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization'];

        if (!token) {
            throw { status: 401, message: 'Token not sent' }
        }

        const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
        console.log(token)

        try {
            jwt.verify(token, SECRET);
            res.locals.token = jwt.verify(token, SECRET);

            next();
        } catch (error) {
            return res.status(401).send('Seu token nao é válido');
        }
    };
}
