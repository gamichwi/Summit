const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password"); //removes password from what is found
  } catch (err) {
    const error = new HttpError(
      "Could not return a user. Please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true }))}); //need to map as an array is returned
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
  const { name, email, password, friends } = req.body;

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
    summits:[],
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

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Login failed. Please try again later.", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  res.json("Logged in!");
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
