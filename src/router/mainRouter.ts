import { Router } from "express";
import routerOne from "./routerOne";
import usersRouter from './usersRouter'
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./notesRouter";
import wifisRouter from "./wifisRouter";

import { validateJWT } from "../middlewares/validateToken";

const mainRouter = Router();

mainRouter.use('/auth', usersRouter)
mainRouter.use(validateJWT());
mainRouter.use('/credential', credentialsRouter)
mainRouter.use('/note', notesRouter)
mainRouter.use('/wifi', wifisRouter)

export default mainRouter