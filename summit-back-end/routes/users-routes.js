const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers.js");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  [
    check("name")
      .not()
      .isEmpty(),
    check("email")
      .normalizeEmail() //Test@test.com => test@test.com
      .isEmail(), //checks if it's a valid email format
    check("password").isLength({ min: 8 }) //checks password is a minimum 8 characters
  ],
  usersControllers.signup
);

router.post("/login", usersControllers.login);

module.exports = router;
