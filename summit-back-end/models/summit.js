const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summitSchema = new Schema({
    title: {type: String, required: true},
    setDate: {type: Date, required: true},
    setImage: {type: String, required: true},
    targetAddress: {type: String, required: true},
    targetDate: {type: Date, required: true},
    targetLocation: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    completedAddress: {type: String, required: true},
    completedDate: {type: Date, required: false},
    completedLocation: {
        lat: {type: Number, required: false},
        lng: {type: Number, required: false}
    },
    completedImage: {type: String, required: false},
    creator: {type: String, required: true},
    private: {type: Boolean, required: true},
    likes: {type: Number, required: false},
    summitWord: {type: Array, required: false}
});

module.exports = mongoose.model('Summit', summitSchema);