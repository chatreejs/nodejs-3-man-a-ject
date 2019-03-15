var http = require('http')
var express = require('express')
var app = express()

var head = '<head>'
    head += '</head>'

var header = '<header>'
    header += '</header>'
var server = app.listen(3000, function() {
    var port = server.address().port
    console.log('Running on port : %s', port)
});

app.get('/', (req, res) => {
    var html = ''
        html += head
        html += '<body>'
        html += '<h1>Homepage Test</h1>'
        html += '</body>'
        
    res.send(html)
});

app.get('/Today', function(req, res) {

    res.send(today)
});

