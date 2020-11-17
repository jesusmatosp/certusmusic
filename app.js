'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar las rutas
var song_router = require('./routes/song.routes');
var playlist_router = require('./routes/playlist.routes');

// Body Parser
app.use(bodyParser.urlencoded({extendend: false}));
app.use(bodyParser.json());

// Header , CORS 

// Routes:
app.use('/api', song_router);
app.use('/api', playlist_router);

// Swagger:
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
