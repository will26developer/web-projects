import express, {Application} from "express";
import cors from "cors";

const setupMiddlewares = (app:Application) => {
  app.use(express.static("public"));
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
}

export default setupMiddlewares;
