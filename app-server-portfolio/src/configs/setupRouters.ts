import express, {Application} from "express";
import frontendMentorRouter from "../routers/statics-routers/frontendMentorRouter";
import spaController from "../controllers/statics-controllers/spaController";
import apiCountriesRouter from "../routers/api-routers/apiCountriesRouter";

const setupRouters = (app:Application) => {
  app.use("/",frontendMentorRouter);
  app.use("/api",apiCountriesRouter);
  app.use("/spa/:name",spaController);
}

export default setupRouters;
