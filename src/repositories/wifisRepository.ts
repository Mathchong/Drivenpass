import client from "../app/database";

import { wifisCreator } from "../types/wifis";

export default class WifisRepository {
    async registerWifi(wifi: wifisCreator) {
        await client.wifis.create({ data: wifi });
    }

    async findById(id: number) {
        return await client.wifis.findUnique({
            where: { id }
        });
    }

    async getAll(userId: number) {
        return await client.wifis.findMany({
            where: { userId }
        })
    }

    async findByTitleAndUserId(userId: number, title: string) {
        return await client.wifis.findFirst({
            where: {
                title,
                userId
            }
        })
    }

    async deleteWifi(id: number) {
        await client.wifis.delete({
            where: { id }
        })
    }
}