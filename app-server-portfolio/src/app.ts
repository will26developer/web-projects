import dotenv from "dotenv";
import express from "express";
import setupMiddlewares from "./configs/setupMiddlewares";

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3000;


setupMiddlewares(app);


app.listen(PORT,()  => {
  console.log(`Server run on port: ${PORT}`)
});
