'use strict'

// Modulos:
var app = require('./app');
var mongoose = require('mongoose');
var host = process.env.MONGO_HOST || 'localhost';
var dbname = process.env.MONGO_DBNAME || 'certusmusic';
var port = process.env.PORT || 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + host + ":27017/" + dbname)
    .then(()=>{
        console.log('Conexión establecida');
        // Inicializar servidor.
        app.listen(port, ()=> {
            console.log('Servidor iniciado en http://localhost:'+port);
        });
    }).catch( err => console.err(err));