import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import { authSchema } from "../schemas/authSchema";
import UsersController from '../controllers/usersControllers'
const users = new UsersController()

const usersRouter = Router()

usersRouter.use(schemaValidate(authSchema))
usersRouter.post('/signin', users.create)
usersRouter.post('/login', users.login)

export default usersRouter;