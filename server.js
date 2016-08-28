var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('remote', path.resolve(__dirname, 'client', 'remote'));

app.use(express.static(path.resolve(__dirname, 'views')));

app.get('/', function(req, res){
	res.render('index.ejs');
}).listen(4545);

console.log('Hellow rowdah');