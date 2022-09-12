import { Router } from "express";

import Wifis from '../controllers/wifisController'
import schemaValidate from "../middlewares/schemaValidate";
import { wifiSchema } from "../schemas/wifiSchema";
import validateParamsId from "../middlewares/verifyParamsId";


const wifis = new Wifis();

const wifisRouter = Router()



wifisRouter.post('/create', schemaValidate(wifiSchema), wifis.create) //Create
wifisRouter.get('/getAll', wifis.getAll) //Get All
wifisRouter.get('/getById/:id', validateParamsId, wifis.getById) //Get One
wifisRouter.delete('/delete/:id', validateParamsId, wifis.delete) //Delete

export default wifisRouter;