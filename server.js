//vars
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//apps
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//server requires
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, '/client')));
app.listen(8000,function(){
	console.log("we're in... on 8000");
})