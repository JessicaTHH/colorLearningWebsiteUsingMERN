
var express = require('express')
var http = require('http');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser')());

var server = http.createServer(app);

// server.listen(4444, () => {
//     console.log('server listen 4444')
// })

app.get('/color', function(req,res) {
    console.log("Someone has request to color");
    const color = require('./routes/color');
    console.log('hello from backend')
    color.color(res);
});

app.get('/selectColors', function(req,res) {
    console.log("Someone has request to select color");
    const selectColors = require('./routes/selectcolors');
    console.log('hello from backend')
      selectColors.selectColors(res);
});

app.get('/objects', function(req,res) {
    console.log("Someone has request to objects");
    const objects = require('./routes/objects');
    console.log('hello from backend')
    objects.objects(res);
});



const port = process.env.PORT || 4444;
app.listen(port, () => {
 console.log('Listening on port', port);
});