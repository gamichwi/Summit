const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../util/location");
const Summit = require("../models/summit");

let DUMMY_PLACES = [
  {
    id: "p1",
    userId: "u1",
    title: "Win a foosball championship",
    completedAddress: "Bartronica, Melbourne",
    setDate: "",
    targetDate: "",
    completedDate: "",
    completed: false,
    setImageUrl: "https://i.ytimg.com/vi/xXq0KPEJuBk/maxresdefault.jpg",
    completedImageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1EQMkYXiRUgWV9rkGpT9AHaE8%26pid%3DApi&f=1",
    setCoordinates: {},
    targetCoordinates: {},
    completedCoordinates: {
      lat: "-37.8785909",
      lng: "144.9739747"
    },
    likes: [],
    summitWord: [],
    private: true
  },
  {
    id: "p2",
    userId: "u2",
    title: "Win a boxing championship",
    completedAddress: "Melbourne Fight Club",
    setDate: "",
    targetDate: "",
    targetAddress: "",
    completedDate: "",
    completed: false,
    setImageUrl:
      "https://media2.trover.com/T/58c263cd74eb4650f0022ede/fixedw_large_4x.jpg",
    completedImageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/jamuna9102019-770x433.png?VB4oJ8dItSqFhwwpLlkhrdCDSzixJd4w",
    setCoordinates: {},
    targetCoordinates: {},
    targetAddress: "",
    completedCoordinates: {
      lat: "-37.7873385",
      lng: "144.8642536"
    },
    likes: [],
    summitWord: [],
    private: true
  }
];

const getSummitById = (req, res, next) => {
  const summitId = req.params.summitId;
  const summit = DUMMY_PLACES.find(s => {
    return s.id === summitId;
  });
  if (!summit) {
    return next(
      new HttpError("Could not find a summit for the provided Summit Id", 404)
    );
  }
  res.json({ summit });
};

const getSummitsByUserId = (req, res, next) => {
  const userId = req.params.userId;

  const summits = DUMMY_PLACES.filter(s => {
    return s.userId === userId;
  });

  if (!summits || summits.length === 0) {
    return next(
      new HttpError("Could not find summits for the provided User Id", 404)
    );
  }

  res.json({ summits });
};

const createSummit = async (req, res, next) => {
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
  const {
    title,
    targetAddress,
    setDate,
    targetDate,
    userId,
    private
  } = req.body;
  console.log(req.body);
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
    setImage:
      "https://images.unsplash.com/photo-1579191203631-368691293d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    targetAddress,
    targetCoordinates: coordinates,
    targetDate,
    userId,
    private
  });

  try {
    await createdSummit.save();
  } catch (err) {
    const error = new HttpError(
      "Creating your Summit failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ summit: createdSummit });
};

const updateSummit = (req, res, next) => {
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

  const { title, targetAddress, targetCoordinates, targetDate } = req.body;
  const summitId = req.params.summitId;

  const updatedSummit = { ...DUMMY_PLACES.find(s => s.id === summitId) };
  const summitIndex = DUMMY_PLACES.findIndex(s => s.id === summitId);
  updatedSummit.title = title;
  updatedSummit.targetAddress = targetAddress;
  updatedSummit.targetCoordinates = targetCoordinates;
  updatedSummit.targetDate = targetDate;

  DUMMY_PLACES[summitIndex] = updatedSummit;

  res.status(200).json({ summit: updatedSummit });
};

const deleteSummit = (req, res, next) => {
  const summitId = req.params.summitId;
  if (!DUMMY_PLACES.find(s => s.id === summitId)) {
    return next(new HttpError("Could not find a summit for that id.", 404));
  }
  DUMMY_PLACES = DUMMY_PLACES.filter(s => s.id !== summitId);
  res.status(200).json({ message: "Deleted Summit." });
};

exports.getSummitById = getSummitById;
exports.getSummitsByUserId = getSummitsByUserId;
exports.createSummit = createSummit;
exports.updateSummit = updateSummit;
exports.deleteSummit = deleteSummit;
