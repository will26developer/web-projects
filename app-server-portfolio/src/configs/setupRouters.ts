import express, {Application} from "express";
import frontendMentorRouter from "../routers/statics-routers/frontendMentorRouter";
import spaRouter from "../routers/statics-routers/spaRouter";

const setupRouters = (app:Application) => {
  app.use("/main",frontendMentorRouter);
  app.use("/main",spaRouter);
}

export default setupRouters;
