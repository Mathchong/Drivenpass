import { Request, Response } from "express";

import NotesServices from "../services/notesServices";

const notes = new NotesServices();

export default class Notes {

    async create(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        req.body.userId = userId

        await notes.create(req.body)

        res.status(201).json({ status: 201, message: "Created" })
    }

    async getAll(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userNotes = await notes.getAll(userId)

        res.status(200).json({ status: 200, message: "Data Found", Data: userNotes })
    }

    async getById(req: Request, res: Response) {
        const userId: number = Number(res.locals.token.userId)
        const userCredential = await notes.getById(res.locals.paramsId, userId)

        return res.status(200).json({ status: 200, message: "Data Found", Data: userCredential })
    }

    async delete(req: Request, res: Response) {

        const userId: number = Number(res.locals.token.userId)
        await notes.delete(userId, res.locals.paramsId)

        res.status(204).json({ status: 204, message: "Deleted" })
    }
}
