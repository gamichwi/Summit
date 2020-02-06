const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summitSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    address: {type: String, required: true},
    setDate: {type: Date, required: true},
    targetDate: {type: Date, required: true},
    completedDate: {type: Date, required: true},
    targetLocation: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    completedLocation: {
        lat: {type: Number, required: false},
        lng: {type: Number, required: false}
    },
    creator: {type: String, required: true},
    private: {type: Boolean, required: true},
    likes: {type: Number, required: false},
    summitWord: {type: Array, required: false},
    setImage: {type: String, required: true},
    completedImage: {type: String, required: false}

});

module.exports = mongoose.model('Summit', summitSchema);