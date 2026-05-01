import { Application, NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { errorHandler } from "./errorHandler";
import { apiCountriesRouter } from "../routers/apiCountriesRouter";

export const setupRouters = (app:Application) => {
    app.use("/api/countries",apiCountriesRouter);

    app.use("/api", (req: Request, res: Response, next: NextFunction) => {
        next(new AppError("Route not found, fetch to /api/countries",404))
    });

    app.use(errorHandler);
}