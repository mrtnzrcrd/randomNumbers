/*
*   masterASP
*   Javascript Competency Test
*   by Ricardo Martinez Montes
*/

var express = require('express');
var app = express();
var random = require('./random');

// Inicialización del modulo random
random.init();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.get('/api/random', function(req, res){
    res.json({random: random.getRandom()});
});

// TODO Cambiar metodo a post
app.get('/api/newTime', function(req, res){
    var tmpTime = parseInt(req.query.time);
    if(tmpTime > 0) {
        random.setNewTime(req.query.time);
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(3000);