import client from "../app/database";

import { cardsCreator } from "../types/cards";

export default class CardsRepository {
    async registerCard(card: cardsCreator) {
        await client.cards.create({ data: card });
    }

    async findById(id: number) {
        return await client.cards.findUnique({
            where: { id }
        });
    }

    async getAll(userId: number) {
        return await client.cards.findMany({
            where: { userId }
        })
    }

    async findByTitleAndUserId(userId: number, title: string) {
        return await client.cards.findFirst({
            where: {
                title,
                userId
            }
        })
    }

    async deleteCard(id: number) {
        await client.cards.delete({
            where: { id }
        })
    }
}