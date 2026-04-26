import express from "express";
import dotenv from "dotenv";
import { setupMiddlewares } from "./configs/setupMiddlewares.js";
import { setupRouter } from "./configs/setupRouters.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


setupMiddlewares(app);
setupRouter(app)

app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
})
