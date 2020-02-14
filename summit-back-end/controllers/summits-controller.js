const fs = require('fs'); //file system
const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../util/location");
const Summit = require("../models/summit");
const User = require("../models/user");

const getSummitById = async (req, res, next) => {
  const summitId = req.params.summitId;
  let summit;
  try {
    summit = await Summit.findById(summitId);
  } catch (err) {
    const error = new HttpError(
      "An error occured. Could not find that Summit.",
      500
    );
    return next(error);
  }

  if (!summit) {
    return next(
      new HttpError("Could not find a summit for the provided Summit Id", 404)
    );
  }
  res.json({ summit: summit.toObject({ getters: true }) }); //removes _ from _id
};

const getSummitsByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  let summits;
  try {
    summits = await Summit.find({ userId: userId });
  } catch (err) {
    const error = new HttpError(
      "An error occured. Please try again later.",
      500
    );
    return next(error);
  }

  if (!summits || summits.length === 0) {
    return next(
      new HttpError("Could not find summits for the provided User Id", 404)
    );
  }

  res.json({
    summits: summits.map(summit => summit.toObject({ getters: true }))
  }); // removes _ from _id
};

const createSummit = async (req, res, next) => {
  // check any validation errors set with express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //console.log(errors);
    return next(
      new HttpError(
        "Invalid data entered. Please check what you have entered.",
        422
      )
    );
  }
  const { title, targetAddress, targetDate, userId, private } = req.body;
  //get coordinates from google api using a function defined in util/location.js
  let coordinates;
  try {
    coordinates = await getCoordsForAddress(targetAddress);
    console.log("coordinates", coordinates);
  } catch (error) {
    return next(error); //forward the error if there is one.
  }

  const createdSummit = new Summit({
    title,
    setDate: Date.now(),
    setImage:req.file.path,
    targetAddress,
    targetCoordinates: coordinates,
    targetDate,
    userId
    // private
  });

  //check if the user id exists already
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Creating your summit failed. Please try again later",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find that user.", 404);
    console.log(error);
    return next(error);
  }

  try {
    //store summit
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdSummit.save({ session: sess });
    //add summit id to the user
    user.summits.push(createdSummit);
    await user.save({ session: sess });
    await sess.commitTransaction(); // saves to the database
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Creating your Summit failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ summit: createdSummit });
};

const updateSummit = async (req, res, next) => {
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

  const { title, targetAddress, targetDate } = req.body;
  const summitId = req.params.summitId;

  let summit;
  try {
    summit = await Summit.findById(summitId);
  } catch (err) {
    const error = new HttpError(
      "An error has occured. Please try again later.",
      500
    );
    return next(error);
  }

  if (summit.userId.toString() !== req.userData.userId){
    const error = new HttpError(
      "Authorization error.",
      401
    );
    return next(error);
  }

  summit.title = title;
  summit.targetAddress = targetAddress;
  summit.targetDate = targetDate;

  try {
    await summit.save();
  } catch (err) {
    const error = new HttpError(
      "An error has occured. Please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json({ summit: summit.toObject({ getters: true }) });
};

const deleteSummit = async (req, res, next) => {
  const summitId = req.params.summitId;
  let summit;
  try {
    summit = await Summit.findById(summitId).populate("userId"); //refer to a document in a different collection
  } catch (err) {
    const error = new HttpError(
      "An error has occured. Could not delete place.",
      500
    );
    return next(error);
  }

  if (!summit) {
    const error = new HttpError("Could not find this Summit", 404);
    return next(error);
  }

const imagePath = summit.setImage;



  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await summit.remove({ session: sess });
    summit.userId.summits.pull(summit); // removes from user record.
    await summit.userId.save({ session: sess }); //saves updated user.
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "An error has occured. Could not delete place.",
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, err => {
    console.log(err);
  });

  res.status(200).json({ message: "Deleted Summit." });
};

exports.getSummitById = getSummitById;
exports.getSummitsByUserId = getSummitsByUserId;
exports.createSummit = createSummit;
exports.updateSummit = updateSummit;
exports.deleteSummit = deleteSummit;
