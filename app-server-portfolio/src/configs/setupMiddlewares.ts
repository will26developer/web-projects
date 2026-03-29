import express, {Application} from "express";
import cors from "cors";
import path from "node:path";

const setupMiddlewares = (app:Application): void =>{
  app.use(cors());
  app.use(express.static(path.join(__dirname,"public")));
  app.use(express.json());
  app.use(express.urlencoded({extended:true}))
}

export default setupMiddlewares;
