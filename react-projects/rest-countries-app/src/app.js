import dotenv from "dotenv";
import express from "express";
import { setupMiddlewares } from "./middlewares/setupMiddlewares.js";
import { setupRouter } from "./middlewares/setupRouter.js";

dotenv.config();

const app = express();
const PORT =  process.env.PORT || 5173;

setupMiddlewares(app);
setupRouter(app);


app.listen(PORT,() => {
    console.log(`Server run on port ${PORT}`);
})