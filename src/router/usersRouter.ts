import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import { authSchema } from "../schemas/authSchema";
import UsersController from '../controllers/usersControllers'
const usersController = new UsersController()

const usersRouter = Router()

usersRouter.use(schemaValidate(authSchema))
usersRouter.post('/signin', usersController.create)
usersRouter.post('/login', usersController.login)

export default usersRouter;