import Cryptr from 'cryptr';
import '../app/config'

const cryptr = new Cryptr(process.env.CRYPTR_KEY ?? "");

export default class CryptrUtils {

    encrypt(key:string){
        return cryptr.encrypt(key)
    }

    decrypt(key:string){
        return cryptr.decrypt(key)
    }

}