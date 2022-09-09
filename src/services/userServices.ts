import { registerAccount, findByEmail } from "../repositories/usersRepository";
import { encrypt,matchPassword } from '../utils/bcryptUtils'
import { userCreator } from "../types/user";
import "../app/config"

export async function createAccount(userData: userCreator) {

    const user = await findByEmail(userData.email)
    if (user) throw { status: 409, message: "E-mail already in use" }

    userData.password = encrypt(userData.password)

    await registerAccount(userData)
}

export async function login(userData: userCreator) {
    //Validar body
    //Verificar se conta existe
    const user = await findByEmail(userData.email)
    if (!user) throw { status: 404, message: "Account not found" }

    //Validar se senha bate
    if(!matchPassword(userData.password, user.password)) throw { status: 401, message: "Password is Wrong"}

    //TODO Envia WJT para o front
    return "JWT token"
}