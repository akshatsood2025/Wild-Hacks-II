const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnimalSchema = new Schema({
    name: {type: String, required: true},
    _id: {type: Number, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
});

module.exports = mongoose.model('Animal', AnimalSchema);
