const uuid = require("uuid/v4");

const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
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

const getSummitByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const summit = DUMMY_PLACES.find(s => {
    return s.userId === userId;
  });
  if (!summit) {
    return next(
      new HttpError("Could not find a summit for the provided User Id", 404)
    );
  }
  res.json({ summit });
};

const createSummit = (req, res, next) => {
  const {
    title,
    targetAddress,
    targetCoordinates,
    targetDate,
    userId
  } = req.body;

  const createdSummit = {
    id: uuid(),
    title,
    targetAddress,
    targetCoordinates,
    targetDate,
    userId
  };
  DUMMY_PLACES.push(createdSummit);

  res.status(201).json({ summit: createdSummit });
};

const updateSummit = (req, res, next) => {
  const { title, targetAddress, targetCoordinates, targetDate } = req.body;
  const summitId = req.params.summitId;

  const updatedSummit = { ...DUMMY_PLACES.find(s => s.id === summitId) };
  const summitIndex = DUMMY_PLACES.findIndex(s => s.id === summitId);
  updatedSummit.title = title;
  updatedSummit.targetAddress = targetAddress;
  updatedSummit.targetCoordinates = targetCoordinates;
  updatedSummit.targetDate = targetDate;

  DUMMY_PLACES[summitIndex] = updatedSummit;

  res.status(200).json({summit: updatedSummit})
};

const deleteSummit = (req, res, next) => {};

exports.getSummitById = getSummitById;
exports.getSummitByUserId = getSummitByUserId;
exports.createSummit = createSummit;
exports.updateSummit = updateSummit;
exports.deleteSummit = deleteSummit;