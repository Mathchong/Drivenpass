import { Router } from "express";

import Cards from '../controllers/cardsController'
import schemaValidate from "../middlewares/schemaValidate";
import { cardSchema } from "../schemas/cardSchema";
import validateParamsId from "../middlewares/verifyParamsId";


const cards = new Cards();

const cardsRouter = Router()



cardsRouter.post('/create', schemaValidate(cardSchema), cards.create) //Create
cardsRouter.get('/getAll', cards.getAll) //Get All
cardsRouter.get('/getById/:id', validateParamsId, cards.getById) //Get One
cardsRouter.delete('/delete/:id', validateParamsId, cards.delete) //Delete

export default cardsRouter;