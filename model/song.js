'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
    name: String,
    description: String,
    author: String,
    year: Number,
    url: String
});

module.exports = mongoose.model('Song', SongSchema);
