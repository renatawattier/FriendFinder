var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var htmlRoutes = require("./routing/htmlRoutes");
app.use(htmlRoutes);

var apiRoutes = require("./routing/apiRoutes");
app.use(apiRoutes);


app.listen(port);

