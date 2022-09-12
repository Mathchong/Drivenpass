import CryptrUtils from '../utils/cryptrUtils';
import { cardsCreator } from "../types/cards";
import { expirationDate } from "../utils/cardDate"
import CardsRepository from "../repositories/cardsRepository";

const cards = new CardsRepository();
const cryptrUtils = new CryptrUtils()

export default class CardsServices {
    async create(card: cardsCreator) {
        //validar jwt e salva o user no locals
        //valida o body
        //valida o @@unique do card
        const alreadyExists = await cards.findByTitleAndUserId(card.userId, card.title)
        if (alreadyExists) throw { status: 409, message: "cards already exists" }
        //encripta a senha
        card.password = cryptrUtils.encrypt(card.password)
        card.cvv = cryptrUtils.encrypt(card.cvv)
        //salva no banco
        await cards.registerCard(card)
    }

    async getAll(userId: number) {
        let cardsFromUser = await cards.getAll(userId)

        if (cardsFromUser.length > 0) {
            cardsFromUser = cardsFromUser.map((card) => {
                card.password = cryptrUtils.decrypt(card.password)
                card.cvv = cryptrUtils.decrypt(card.cvv)
                return card
            })

        }

        return cardsFromUser
    }


    async getById(cardId: number, userId: number) {

        const card = await cards.findById(cardId)
        if (!card) throw { status: 404, message: "card not found" }
        if (card.userId !== userId) throw { status: 401, message: "Unauthorized" }

        card.password = cryptrUtils.decrypt(card.password)
        card.cvv = cryptrUtils.decrypt(card.cvv)

        return card
    }

    async delete(userId: number, cardId: number) {

        const card = await cards.findById(cardId)
        if (!card) throw { status: 404, message: "card not found" }
        if (card.userId !== userId) throw { status: 401, message: "Unauthorized" }
        await cards.deleteCard(cardId)
    }
}

