'use strict'

//cargar modulo node
var express = require('express');
var bodyParser = require('body-parser');


//ejecutar express
var app = express();

//rutas

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors

//prefijo rutas

//exportar modulos
module.exports = app;