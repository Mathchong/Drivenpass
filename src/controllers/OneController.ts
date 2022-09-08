import { Request, Response } from "express";

export default class OneController {
    async create(req: Request, res: Response) {
        res.status(201).json({ status: 201, message: "Creted" })
    }

    async getAll(req: Request, res: Response) {
        res.status(200).json({status:200, message: "Data Found", Data:{}})
    }

    async delete(req: Request, res: Response) {
        res.status(204).json({status:204, message: "Deleted"})
    }
}