import { Request, Response } from "express";

import { createAccount, login } from "../services/userServices";

export default class Users {
    async create(req: Request, res: Response) {

        await createAccount(req.body)

        res.status(201).json({ status: 201, message: "Created" })
    }

    async login(req: Request, res: Response) {

        const jwtToken = await login(req.body)

        res.status(200).json({ status: 200, message: "Data Found", Data: { jwtToken } })
    }
}