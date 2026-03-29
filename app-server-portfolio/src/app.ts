import dotenv from "dotenv";
import express from "express";
import setupMiddlewares from "./configs/setupMiddlewares";
import setupRouters from "./configs/setupRouters";

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const app = express();

setupMiddlewares(app);
setupRouters(app);

app.listen(PORT,() => console.log(`Server run on port: ${PORT}`))


