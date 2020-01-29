const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Gavin Williams",
    email: "gavin@gavin.com",
    password: "pass"
  },
  {
    id: "u2",
    name: "Williams Gavin",
    email: "test@test.com",
    password: "test"
  }
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  // check any validation errors set with express-validator
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError(
        "Invalid data entered. Please check what you have entered.",
        422
      )
    );
  }

  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    return next(
      new HttpError(
        "Can not create a new user. That email already exists.",
        422
      )
    );
  }
  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password != password) {
    return next(
      new HttpError("Login error. Please check your login details.", 401)
    );
  }
  res.json("Logged in!");
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
