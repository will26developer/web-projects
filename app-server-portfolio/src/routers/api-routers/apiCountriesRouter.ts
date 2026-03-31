import Router from "express";
import apiCountriesController from "../../controllers/api-controllers/apiCountriesController";

const router = Router();

router.get("/countries",apiCountriesController)

export default router;
