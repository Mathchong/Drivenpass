import bcrypt from "bcrypt";
import "../app/config"

export function encrypt(key: string){
    return bcrypt.hash(key, String(process.env.BCRYPT_KEY))
}