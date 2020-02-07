const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

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

const signup = async (req, res, next) => {
  // check any validation errors set with express-validator
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid data entered. Please check what you have entered.",
        422
      )
    );
  }
  const { name, email, password, summits, friends } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signup failed. Please try again later.", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("That user already exists. Please login.", 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    image:
      "https://pngriver.com/wp-content/uploads/2018/04/Download-Male-User-Logo-Png-Image-69558-For-Designing-Projects.png",
    summits,
    friends
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Sign up failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) }); //converts to default javascript object and removes the _
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
