'use strict'

var express = require('express');
var SongController = require('../controllers/song.controller');
var api = express.Router();

api.post('/song', SongController.createtSong);
api.get('/song', SongController.getListSongs);
api.get('/song/:id', SongController.getSongById);
api.put('/song/:id', SongController.updateSong);
api.delete('/song/:id', SongController.deleteSong);

module.exports = api;