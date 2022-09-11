import { Request, Response, NextFunction } from "express"

export default function validateParamsId(req: Request, res: Response, next: NextFunction) {
    let id = parseInt(req.params.id, 10)

    if (!id) throw { status: 404, message: 'ID not found' }
    if (id <= 0) throw { status: 404, message: 'Invalid ID' }

    res.locals.paramsId = id

    next()
}