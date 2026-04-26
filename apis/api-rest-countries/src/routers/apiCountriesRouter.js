import { Router } from "express";
import { apiCountriesController } from "../controllers/apiCountriesController.js";


export const apiCountriesRouter = Router();

apiCountriesRouter.get("/countries", apiCountriesController);


