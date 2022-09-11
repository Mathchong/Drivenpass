import { Router } from "express";

import Notes from '../controllers/notesController'
import schemaValidate from "../middlewares/schemaValidate";
import { noteSchema } from "../schemas/noteSchema";
import validateParamsId from "../middlewares/verifyParamsId";

const notes = new Notes();
const notesRouter = Router()

notesRouter.post('/create', schemaValidate(noteSchema), notes.create)
notesRouter.get('/getAll', notes.getAll)
notesRouter.get('/getById/:id', validateParamsId, notes.getById)
notesRouter.delete('/delete/:id', validateParamsId, notes.delete)

export default notesRouter;