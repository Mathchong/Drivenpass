import { Request, Response } from "express";

import CredentialsServices from "../services/credentialServices";

const credentialsServices = new CredentialsServices()

export default class Credentials {

    async create(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        req.body.userId = userId

        await credentialsServices.create(req.body)

        res.status(201).json({ status: 201, message: "Creted" })
    }

    async getAll(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userCredentials = await credentialsServices.getAll(userId)

        res.status(200).json({ status: 200, message: "Data Found", Data: userCredentials })
    }

    async getById(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userCredential = await credentialsServices.getById(res.locals.paramsId, userId)

        return res.status(200).json({ status: 200, message: "Data Found", Data: userCredential })
    }

    async delete(req: Request, res: Response) {

        const userId: number = Number(res.locals.token.userId)
        await credentialsServices.delete(userId, res.locals.paramsId)

        res.status(204).json({ status: 204, message: "Deleted" })
    }
}
