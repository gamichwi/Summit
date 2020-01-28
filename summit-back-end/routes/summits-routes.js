const express = require("express");

const summitControllers = require('../controllers/summits-controller'); 

const router = express.Router();

router.get("/:summitId", summitControllers.getSummitById);

router.get("/user/:userId", summitControllers.getSummitsByUserId);

router.post('/', summitControllers.createSummit);

router.patch('/:summitId', summitControllers.updateSummit);

router.delete('/:summitId', summitControllers.deleteSummit);

module.exports = router;
