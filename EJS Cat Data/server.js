// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
//console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();
//console.log("Let's find out what app is", app);


// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


app.get('/cats', function(request, response){
	response.render('cats');
});

//cat details
//black
app.get('/cats/black', function (request, response) {
    var black = {
    	id: 1,
        name: "Black",
        favorite_food: "fish",
        age: 2,
        hobby: ['sleep', 'eat', 'steal food']
        
    };
    response.render('catDetails', {
        detail: black
    });
});

//smirk
app.get('/cats/smirk', function (request, response) {
    var smirk = {
    	id: 2,
        name: "Smirk",
        favorite_food: "chicken",
        age: 3,
        hobby: ['climb', 'run', 'attack']
        
    };
    response.render('catDetails', {
        detail: smirk
    });
});

//half
app.get('/cats/half', function (request, response) {
    var half = {
    	id: 3,
        name: "Half",
        favorite_food: "beef",
        age: 1,
        hobby: ['hide', 'jump', 'play ball']
        
    };
    response.render('catDetails', {
        detail: half
    });
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
});
