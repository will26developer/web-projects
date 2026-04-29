import express, {Application} from "express";
import dotenv from "dotenv";
import { setupMiddlewares } from "./configs/setupMiddlewares";

dotenv.config();
const app:Application = express(); 
const PORT = process.env.PORT || 8080;

setupMiddlewares(app);


app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})