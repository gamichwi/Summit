const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS"){
        return next();//ensure our options request is not blocked.
    };
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: "Bearer TOKEN"

    if (!token) {
      throw new Error("Authentication failed.");
    }
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_KEY
    );//validate the token
    req.userData = { userId: decodedToken.userId }; //add data to the request
    next(); // let the request continue
  } catch (err) {
    const error = new HttpError("Authentication failed.", 403);
    return next(error);
  }
};
