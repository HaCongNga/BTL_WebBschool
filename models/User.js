const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    pass: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', User);