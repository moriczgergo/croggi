var express = require('express')
const util = require('util')
var app = express()

var port = 40

app.get('/', function (req, res) {
    console.log('Newreq: ' + req.connection.remoteAddress + ' - ' + req.url)
    res.send('{ "status": "alive" }')
})

app.get('/gs/', function (req, res) {
    if (req.query.username){
        res.send('{ "ttp": [ "", "", "Welcome to an example croggi server, ' + req.query.username + '!", "", "" ], "keyAnswer": false, "halt": true }')
    } else {
        res.send('{ "error": "noUser" }')
    }
    console.log(util.inspect(req, false, null))
    console.log('Newreq: ' + req.connection.remoteAddress + ' - ' + req.url)
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})