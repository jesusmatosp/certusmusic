'use strict'

var Playlist = require('../model/playlist');

function createPlayList(req, res) {
    var playlist = new Playlist();
    var params = req.body;
    if(params.name){
        playlist.name = params.name;
        playlist.description = params.description;
        playlist.songs= params.songs;

        playlist.save((err, playListStored) => {
            if(err){
                res.status(500).send({
                    message: 'Error en el servidor.' + err
                });
            } else {
                if(playListStored){
                    res.status(200).send({
                        playlist: playListStored
                    });
                } else {
                    res.status(200).send({
                        message: 'No se pudo guardar la playlist'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre de la playlist es obligatorio'
        });
    }
}

function getPlaylistById(req, res){
    var playlistId = req.params.id;
    Playlist.findById(playlistId).exec((err, playlist) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(playlist){
                res.status(200).send({
                    playlist
                });
            } else {
                res.status(404).send({
                    message: 'No existe la playlist'
                }); 
            }
        }
    });
}

function getListPlaylist(req, res){
    Playlist.find({}).sort({'_id':-1}).exec((err, playlist) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(playlist){
                res.status(200).send({
                    playlist
                });
            } else {
                res.status(404).send({
                    message: 'No hay playlist.'
                });
            }
        }
    });
}

function deletePlaylist(req, res) {
    var playlistId = req.params.id;
    Playlist.findByIdAndRemove(playlistId, (err, playlistRemoved) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(playlistRemoved){
                res.status(200).send({
                    playlist: playlistRemoved
                });
            } else {
                res.status(404).send({
                    message: 'No existe la playlist'
                }); 
            }
        }
    });
}

function updatePlaylist(req, res) {
    var playlistId = req.params.id;
    var update = req.body;
    Playlist.findByIdAndUpdate(playlistId, update, {new: true}, (err, playlistUpdated) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(playlistUpdated){
                res.status(200).send({
                    playlist: playlistUpdated
                });
            } else {
                res.status(404).send({
                    message: 'No existe la playlist'
                }); 
            }
        }
    });
}

module.exports = {
    createPlayList,
    updatePlaylist,
    deletePlaylist,
    getListPlaylist,
    getPlaylistById
}