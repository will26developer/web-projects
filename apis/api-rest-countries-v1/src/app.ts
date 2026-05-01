import express, {Application} from "express";
import dotenv from "dotenv";
import { setupMiddlewares } from "./configs/setupMiddlewares";
import { setupRouters } from "./configs/setupRouters";

dotenv.config();
const app:Application = express(); 
const PORT = process.env.PORT || 8080;

setupMiddlewares(app);
setupRouters(app);

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})