import { Router } from "express";
import routerOne from "./routerOne";
import usersRouter from './usersRouter'
import credentialsRouter from "./credentialsRouter";

import { validateJWT } from "../middlewares/validateToken";

const mainRouter = Router();

mainRouter.use('/auth', usersRouter)
mainRouter.use(validateJWT());
mainRouter.use('/credential', credentialsRouter)

export default mainRouter