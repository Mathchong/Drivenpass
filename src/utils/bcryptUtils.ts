import bcrypt from "bcrypt";
import "../app/config"

export function encrypt(key: string){
    return bcrypt.hashSync(key, Number(process.env.BCRYPT_KEY))
}