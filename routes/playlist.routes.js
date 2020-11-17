'use strict'

var express = require('express');
var PlayListController = require('../controllers/playlist.controller');
var api = express.Router();

api.post('/playlist', PlayListController.createPlayList);
api.get('/playlist', PlayListController.getListPlaylist);
api.get('/playlist/:id', PlayListController.getPlaylistById);
api.put('/playlist/:id', PlayListController.updatePlaylist);
api.delete('/playlist/:id', PlayListController.deletePlaylist);

module.exports = api;