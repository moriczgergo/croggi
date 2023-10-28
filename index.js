var express = require('express')
const util = require('util')
var app = express()

var port = 40

var ver = "0.1.0"

app.get('/', function (req, res) {
    console.log('Newreq: ' + req.connection.remoteAddress + ' - ' + req.url)
    res.send('{ "status": "alive", "ver": "' + ver + '" }')
})

app.get('/gs/', function (req, res) {
    if (req.query.username){
        res.send('{ "ttp": [ "", "", "Welcome to an example croggi server, ' + req.query.username + '!", "", "" ], "keyAnswer": true, "halt": false }')
    } else {
        res.send('{ "error": "noUser" }')
    }
    console.log('Newreq: ' + req.connection.remoteAddress + ' - ' + req.url)
})

app.get('/updat/', function (req, res) {
    if (req.query.username){
        res.send('{ "ttp": [ "", "", "Welcome to an example croggi server, ' + req.query.username + '!", "You pressed ' + req.query.key + '", "" ], "keyAnswer": true, "halt": false }')
    } else {
        res.send('{ "error": "noUser" }')
    }
    console.log('Newreq: ' + req.connection.remoteAddress + ' - ' + req.url)
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})

function keyParser(key){
    
}