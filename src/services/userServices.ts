import { userCreator } from "../types/user";
import { registerAccount,findByEmail } from "../repositories/usersRepository";

export async function createAccount(userData: userCreator) {
    //valida informações do body (e-mail correto e senha padrão)

    //verifica se e-mail já não é cadastrado
    const user = await findByEmail(userData.email)
    if (user) throw{status:409, message:"E-mail already in use"}
    //Encripta a senha

    //cadastra no banco e envia ok
    await registerAccount(userData)
}