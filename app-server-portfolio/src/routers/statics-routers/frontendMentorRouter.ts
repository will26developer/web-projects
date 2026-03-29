import { Router } from "express";
import frontendMentorController from "../../controllers/statics-controllers/frontendMentorController";

const router = Router();

router.get("/frontend-mentor/:number",frontendMentorController);

export default router;
