const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const summitSchema = new Schema({
  title: { type: String, required: true },
  setDate: { type: Date, required: true },
  setImage: { type: String, required: true },
  targetAddress: { type: String, required: true },
  targetDate: { type: Date, required: true },
  targetCoordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  completedAddress: { type: String, required: false },
  completedDate: { type: Date, required: false },
  completedCoordinates: {
    lat: { type: Number, required: false },
    lng: { type: Number, required: false }
  },
  completedImage: { type: String, required: false },
  userId: { type: String, required: true },
  private: { type: Boolean, required: true },
  likes: { type: Number, required: false },
  summitWord: { type: Array, required: false }
});

module.exports = mongoose.model("Summit", summitSchema);