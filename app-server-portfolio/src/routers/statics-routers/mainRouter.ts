import { Router } from "express";
import mainController from "../../controllers/statics-controllers/mainController";

const router = Router();

router.get("/",mainController);

export default router;