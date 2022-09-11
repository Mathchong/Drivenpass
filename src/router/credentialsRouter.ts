import { Router } from "express";

import Credentials from '../controllers/credentialsController'
import schemaValidate from "../middlewares/schemaValidate";
import { credentialSchema } from "../schemas/credentialSchema";
import validateParamsId from "../middlewares/verifyParamsId";


const credentials = new Credentials();

const credentialsRouter = Router()



credentialsRouter.post('/create', schemaValidate(credentialSchema), credentials.create) //Create
credentialsRouter.get('/getAll', credentials.getAll) //Get All
credentialsRouter.get('/getById/:id', validateParamsId, credentials.getById) //Get One
credentialsRouter.delete('/delete/:id', validateParamsId, credentials.delete) //Delete

export default credentialsRouter;