import {Router} from "express";

import OneController from '../controllers/OneController'
const oneController = new OneController()

const routerOne = Router()

routerOne.post('/create', oneController.create) //Create
routerOne.get('/getAll', oneController.getAll) //Get All
routerOne.get('/:id', (req, res) =>{}) //Get One
routerOne.delete('/:id', oneController.delete) //Delete

export default routerOne;