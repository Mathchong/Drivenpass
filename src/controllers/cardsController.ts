import { Request, Response } from "express";

import CardsServices from "../services/cardsServices";

const card = new CardsServices();

export default class Cards {

    async create(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        req.body.userId = userId

        await card.create(req.body)

        res.status(201).json({ status: 201, message: "Creted" })
    }

    async getAll(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userCards = await card.getAll(userId)

        res.status(200).json({ status: 200, message: "Data Found", Data: userCards })
    }

    async getById(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userCard = await card.getById(res.locals.paramsId, userId)

        return res.status(200).json({ status: 200, message: "Data Found", Data: userCard })
    }

    async delete(req: Request, res: Response) {

        const userId: number = Number(res.locals.token.userId)
        await card.delete(userId, res.locals.paramsId)

        res.status(204).json({ status: 204, message: "Deleted" })
    }
}
