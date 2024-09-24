'use strict'

var mongoose = require('mongoose');
var port = 3900;
var app = require('./app');



//conectamos a bbdd
mongoose.connect('mongodb://localhost:27017/api_rest_portfolio', { useNewUrlParser: true})
        .then(()=>{
            console.log('conectado a bbdd!');
            
            app.listen(port, ()=>{
                console.log('peticiones http en puerto:'+port);
            });
        });

 