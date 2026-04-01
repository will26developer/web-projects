import express, {Application} from "express";
import frontendMentorRouter from "../routers/statics-routers/frontendMentorRouter";
import spaController from "../controllers/statics-controllers/spaController";
import apiCountriesRouter from "../routers/api-routers/apiCountriesRouter";
import errorHandler from "./errorHandler";

const setupRouters = (app:Application) => {
  app.use("/",frontendMentorRouter);
  app.use("/api",apiCountriesRouter);
  app.use("/spa/:name",spaController);
  app.use("/api",(req,res,next) => {
    next({
      status:404,
      message: `API route ${req.originalUrl} not found`
    });
  });

  app.use((req,res,next) => {
    next({
      status:404,
      message: `Route ${req.originalUrl} not found`
    });
  });

  app.use(errorHandler)
}

export default setupRouters;
