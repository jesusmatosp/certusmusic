'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaylistSchema = Schema({
    name: String,
    description: String,
    songs: [
        {
            _id: String,
            name: String,
            url: String
        }
    ]
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
