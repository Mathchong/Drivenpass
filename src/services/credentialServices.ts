import { encrypt } from '../utils/bcryptUtils'
import CryptrUtils from '../utils/cryptrUtils';
import { credentialsCreator } from "../types/credentials";
import CredentialRepository from "../repositories/credentialRepository";

const credentials = new CredentialRepository();
const cryptrUtils = new CryptrUtils()

export default class CredentialsServices {
    async create(credential: credentialsCreator) {
        //validar jwt e salva o user no locals
        //valida o body
        //valida o @@unique da credential
        const alreadyExists = await credentials.findByTitleAndUserId(credential.userId, credential.title)
        if (alreadyExists) throw { status: 409, message: "Credentials already exists" }
        //encripta a senha
        credential.password = cryptrUtils.encrypt(credential.password)
        //salva no banco
        await credentials.registerCredential(credential)
    }

    async getAll(userId: number) {
        let credentialsFromUser = await credentials.getAll(userId)

        if (credentialsFromUser.length > 0) {
            credentialsFromUser = credentialsFromUser.map((credential) => {
                credential.password = cryptrUtils.decrypt(credential.password)
                return credential
            })

        }

        return credentialsFromUser
    }


    async getById(credentialId: number, userId: number) {

        const credential = await credentials.findById(credentialId)
        if (!credential) throw { status: 404, message: "Credential not found" }
        if (credential.userId !== userId) throw { status: 401, message: "Unauthorized" }

        credential.password = cryptrUtils.decrypt(credential.password)

        return credential
    }

    async delete(userId: number, credentialId: number) {

        const credential = await credentials.findById(credentialId)
        if (!credential) throw { status: 404, message: "Credential not found" }
        if (credential.userId !== userId) throw { status: 401, message: "Unauthorized" }
        await credentials.deleteCredential(credentialId)
    }
}

