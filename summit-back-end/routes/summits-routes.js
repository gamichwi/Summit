const express = require("express");

const summitControllers = require('../controllers/summits-controller'); 

const router = express.Router();

router.get("/:summitId", summitControllers.getSummitById);

router.get("/user/:userId", summitControllers.getSummitByUserId);

router.post('/', summitControllers.createSummit);

module.exports = router;
