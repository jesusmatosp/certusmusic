'use strict'
var Song = require('../model/song');

function createtSong(req, res) {
    var song = new Song();
    var params = req.body;
    if(params.name){
        song.name = params.name;
        song.description = params.description;
        song.author= params.author;
        song.year = params.year;
        song.url = params.url;

        song.save((err, songStored) => {
            if(err){
                res.status(500).send({
                    message: 'Error en el servidor.' + err
                });
            } else {
                if(songStored){
                    res.status(200).send({
                        song: songStored
                    });
                } else {
                    res.status(200).send({
                        message: 'No se pudo guardar la canción'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre de la canción es obligatorio'
        });
    }
}

function getSongById(req, res){
    var songId = req.params.id;
    Song.findById(songId).exec((err, song) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(song){
                res.status(200).send({
                    song
                });
            } else {
                res.status(404).send({
                    message: 'No existe la canción'
                }); 
            }
        }
    });
}

function getListSongs(req, res){
    Song.find({}).sort({'_id':-1}).exec((err, songs) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(songs){
                res.status(200).send({
                    songs
                });
            } else {
                res.status(404).send({
                    message: 'No hay canciones.'
                });
            }
        }
    });
}

function deleteSong(req, res) {
    var songId = req.params.id;
    Song.findByIdAndRemove(songId, (err, songRemoved) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(songRemoved){
                res.status(200).send({
                    song: songRemoved
                });
            } else {
                res.status(404).send({
                    message: 'No existe el canción'
                }); 
            }
        }
    });
}

function updateSong(req, res) {
    var songId = req.params.id;
    var update = req.body;
    Song.findByIdAndUpdate(songId, update, {new: true}, (err, songUpdated) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(songUpdated){
                res.status(200).send({
                    song: songUpdated
                });
            } else {
                res.status(404).send({
                    message: 'No existe el canción'
                }); 
            }
        }
    });
}

function prueba(req, res) {
    res.status(200).send(
        {
            message: 'Que la fuerza  te acompañe.'
        });
};

module.exports = {
    createtSong,
    prueba,
    getListSongs,
    getSongById,
    updateSong,
    deleteSong
}
