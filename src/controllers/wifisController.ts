import { Request, Response } from "express";

import WifisServices from "../services/wifisServices";

const wifiService = new WifisServices()

export default class Wifis {

    async create(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        req.body.userId = userId

        await wifiService.create(req.body)

        res.status(201).json({ status: 201, message: "Creted" })
    }

    async getAll(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userWifis = await wifiService.getAll(userId)

        res.status(200).json({ status: 200, message: "Data Found", Data: userWifis })
    }

    async getById(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userWifi = await wifiService.getById(res.locals.paramsId, userId)

        return res.status(200).json({ status: 200, message: "Data Found", Data: userWifi })
    }

    async delete(req: Request, res: Response) {

        const userId: number = Number(res.locals.token.userId)
        await wifiService.delete(userId, res.locals.paramsId)

        res.status(204).json({ status: 204, message: "Deleted" })
    }
}
