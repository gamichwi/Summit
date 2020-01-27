const express = require("express");

const HttpError = require("../models/http-error");
const summitControllers = require('../controllers/summits-controller'); 

const router = express.Router();

router.get("/:summitId", summitControllers.getSummitById);

router.get("/user/:userId", summitControllers.getSummitByUserId);

module.exports = router;
