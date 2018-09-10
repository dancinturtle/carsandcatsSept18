var express =  require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/cars', function(request, response) {
    response.render('cars');
})

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/tom', function(request, response) {
    var catINFO = {
        name: "Tom",
        age: 1,
        sleepingSpots: ["under bed", "in a sunbeam", "under car"]
    }
    response.render('catINFO', {cat: catINFO});
})

app.get('/frank', function(request, response) {
    var catINFO = {
        name: "Frank",
        age: 2,
        sleepingSpots: ["under table", "on couch", "on a rock"]
    }
    response.render('catINFO', {cat: catINFO});
})

app.get('/tod', function(request, response) {
    var catINFO = {
        name: "Tod",
        age: 3,
        sleepingSpots: ["on the fridge", "in a car", "on bed"]
    }
    response.render('catINFO', {cat: catINFO});
})


app.get('/form', function(request, response) {
    response.render('form');
})

app.listen(8000, function() {
    console.log("listening on 8000");
})