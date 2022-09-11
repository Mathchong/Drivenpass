import jwt from 'jsonwebtoken';

import { registerAccount, findByEmail } from "../repositories/usersRepository";
import { encrypt, matchPassword } from '../utils/bcryptUtils'
import { userCreator } from "../types/user";
import "../app/config"

export async function createAccount(userData: userCreator) {

    const user = await findByEmail(userData.email)
    if (user) throw { status: 409, message: "E-mail already in use" }

    userData.password = encrypt(userData.password)

    await registerAccount(userData)
}

export async function login(userData: userCreator) {

    const user = await findByEmail(userData.email)
    if (!user) throw { status: 404, message: "Account not found" }

    console.log(userData.password, user.password)
    if (!matchPassword(userData.password, user.password)) throw { status: 401, message: "Password is Wrong" }

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;
    console.log(EXPIRES_IN)

    const payload = {
        userId: user.id,
        email: user.email
    }
    const jwtConfig = {
        expiresIn: EXPIRES_IN
    };

    const token = jwt.sign(payload, SECRET, jwtConfig);

    return token
}