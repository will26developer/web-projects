import {Router} from "express";
import spaController from "../../controllers/statics-controllers/spaController";
const router = Router();

router.get("/spa/:name/",spaController);
router.get("/spa/:name/:rest*",spaController);

export default router;
