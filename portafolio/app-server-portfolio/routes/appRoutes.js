const express = require("express");
const router  = express.Router();
const appController = require("../controllers/appController");

router.get("/",appController.mainLandingPage);
router.get("/project01",appController.mainProject01);
router.get("/project02",appController.mainProject02);
router.get("/project03",appController.mainProject03);
router.get("/project04",appController.mainProject04);
router.get("/project05",appController.mainProject05);
router.get("/project06",appController.mainProject06);
router.get("/project07",appController.mainProject07);
router.get("/project08",appController.mainProject08);
router.get("/project09",appController.mainProject09);



module.exports = router;