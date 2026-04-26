import { apiCountriesRouter } from "../routers/apiCountriesRouter.js";
import { errorHandler } from "./errorHandler.js";


export const setupRouter = app => {
  app.use("/api", apiCountriesRouter);

   app.use((req, res, next) => {
    const error = new Error(`Route ${req.url} not found`);
    error.status = 404;
    next(error);
  });
  
  app.use(errorHandler);
}
