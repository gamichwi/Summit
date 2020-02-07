const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},//unique creates an index that speeds up the query process
    password: { type: String, required: true, minlength: 8 },
    image: {type: String, required: true},
    summits: {type: String, required: true},
    friends: {type: Array, required: false}
})

userSchema.plugin(uniqueValidator);//ensures email is unique.

module.exports = mongoose.model('User', userSchema);