import {Router} from "express";
import routerOne from "./routerOne";
import usersRouter from './usersRouter'

const mainRouter = Router();

mainRouter.use('/one', routerOne)
mainRouter.use('/auth', usersRouter)

export default mainRouter