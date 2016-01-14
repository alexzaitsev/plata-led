var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var routes = require('./routes/index');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views'); // view engine setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use('/', routes);	

server.listen(app.get('port'), function() {
  console.log('created express server on port ' + app.get('port'));
});

module.exports = app;
