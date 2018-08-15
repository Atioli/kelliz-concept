var express = require('express');
var app = express();
// security
// var csrf = require('csurf');
// var csrfProtect = csrf();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res){
    res.type('text/html');
    res.render('home.handlebars');
});

//Creating database
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://kelliz:kelliz2@ds217452.mlab.com:17452/kelliz-concept"; 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;var mongo = require('mongodb');
  console.log("Database created!");
  db.close();
});

// routes
app.get('/About', function(req, res){
    res.render('about.handlebars');
});

app.get('/account/signup', function(req, res){
    res.render('signup.handlebars');
});

// app.get('/account/signup', function(req, res, next){
//     res.render('account/signup', {csrfToken: req.csrfToken})
// });

//custom 404 page 
app.use(function(req, res, next){
    res.status(404);
    res.render('404.handlebars');
});


app.listen(app.get('port'), function(){
   console.log('express started on localhost:' +
   app.get('port'));
});

