import {Router} from "express";

import UsersController from '../controllers/usersControllers'
const usersController = new UsersController()

const usersRouter = Router()

usersRouter.post('/signin', usersController.create) 
usersRouter.post('/login', usersController.login) 

export default usersRouter;