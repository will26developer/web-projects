import { Router } from "express";
import { apiCountriesController } from "../controllers/apiCountriesControllers";

export const apiCountriesRouter = Router();

apiCountriesRouter.get("/",apiCountriesController);