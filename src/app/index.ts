import Express, { json } from "express";
import "express-async-errors";
import cors from "cors";

import "./config"
import mainRouter from '../router/mainRouter'
import errorHandler from "../middlewares/errorHandler";

const app = Express();

app.use(cors());
app.use(json())
app.use(mainRouter)
app.use(errorHandler)

const PORT: Number = Number(process.env.PORT) || 5005

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});