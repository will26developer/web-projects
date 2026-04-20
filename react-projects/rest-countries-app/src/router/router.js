import express from "express";
import { apiController } from "../controllers/apiController.js";

const router = express.Router();

router.get("/countries",apiController);

export default router;