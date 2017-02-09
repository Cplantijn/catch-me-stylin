var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
var config = require('./config');
var scenariosObj = require('./scenarios');
var _ = require('lodash');
var uuidV4 = require('uuid/v4');
var bodyParser = require('body-parser');

var users = {};

app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/scenario/:name', function(req, res) {
  var scenario = scenariosObj.scenarios[req.params.name];
  io.emit('newScenario', scenario);
  res.send();
});

app.post('/signin', function(req, res) {
  users[req.body.guid] = {
    displayName: req.body.displayName,
    markupCss: null
  };
  io.emit('newUser', users);
  res.send();
});

app.put('/update', function(req, res) {
  users[req.body.guid].markupCss = req.body.markup;
  io.emit('markupUpdate', users);
  res.send();
});

app.get('/scenarios', function (req, res) {
  var scenarios = _.map(scenariosObj.scenarios, function(scenario, key) {
    return { key: key, label: scenario.label };
  });
  res.json({ body: scenarios });
});

io.on('connection', function(socket) {
  var guid = uuidV4();
  users[guid] = {};
  socket.emit('welcome', guid);
});

server.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
});
