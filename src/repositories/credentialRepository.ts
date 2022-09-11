import client from "../app/database";

import { credentialsCreator } from "../types/credentials";

export default class CredentialRepository {
    async registerCredential(credentials: credentialsCreator) {
        await client.credentials.create({ data: credentials });
    }

    async findById(id: number) {
        return await client.credentials.findUnique({
            where: { id }
        });
    }

    async getAll(userId: number) {
        return await client.credentials.findMany({
            where: { userId }
        })
    }

    async findByTitleAndUserId(userId: number, title: string) {
        return await client.credentials.findFirst({
            where: {
                title,
                userId
            }
        })
    }

    async deleteCredential(id: number) {
        await client.credentials.delete({
            where: { id }
        })
    }
}