import { registerAccount, findByEmail } from "../repositories/usersRepository";
import { encrypt } from '../utils/bcryptUtils'
import { userCreator } from "../types/user";
import "../app/config"

export async function createAccount(userData: userCreator) {

    const user = await findByEmail(userData.email)
    if (user) throw { status: 409, message: "E-mail already in use" }

    userData.password = encrypt(userData.password)

    await registerAccount(userData)
}