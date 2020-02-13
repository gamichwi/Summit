const express = require("express");
const { check } = require("express-validator");

const summitControllers = require("../controllers/summits-controller");
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get("/:summitId", summitControllers.getSummitById);

router.get("/user/:userId", summitControllers.getSummitsByUserId);

router.post(
  "/",
  fileUpload.single('image'),
  [
    check("title")
      .not()
      .isEmpty(),
    check("targetAddress")
      .not()
      .isEmpty(),
    check("targetDate")
      .not()
      .isEmpty()
  ],
  summitControllers.createSummit
);

router.patch(
  "/:summitId",
  [
    check("title")
      .not()
      .isEmpty(),
    check("targetAddress")
      .not()
      .isEmpty(),
    check("targetDate")
      .not()
      .isEmpty()
  ],
  summitControllers.updateSummit
);

router.delete("/:summitId", summitControllers.deleteSummit);

module.exports = router;
