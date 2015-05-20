/*
*   masterASP
*   Javascript Competency Test
*   by Ricardo Martinez Montes
*/

var express = require('express'),
    bodyParser = require('body-parser'),
    random = require('./random');

// Inicialize random module
random.init();

var app = express();

// to support JSON-encoded bodies
app.use( bodyParser.json() );


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.get('/api/random', function(req, res){
    res.json({random: random.getRandom()});
});

app.post('/api/newTime', function(req, res){
    var tmpTime = parseInt(req.body.time);
    if(tmpTime > 0) {
        random.setNewTime(req.body.time);
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(3000);