const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: "Bearer TOKEN"

    if (!token) {
      throw new Error("Authentication failed.");
    }
    const decodedToken = jwt.verify(
      token,
      "reticulating_splines_dont_tell_anyone"
    );//validate the token
    req.userData = { userId: decodedToken.userId }; //add data to the request
    next(); // let the request continue
  } catch (err) {
    const error = new HttpError("Authentication failed.", 401);
    return next(error);
  }
};
