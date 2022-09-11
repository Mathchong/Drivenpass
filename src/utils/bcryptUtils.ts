import bcrypt from "bcrypt";
import "../app/config"

export function encrypt(key: string) {
    return bcrypt.hashSync(key, Number(process.env.BCRYPT_KEY))
}

export function matchPassword(password: string, encryptedPassword: string): boolean {

    return bcrypt.compareSync(password, encryptedPassword)
    
}