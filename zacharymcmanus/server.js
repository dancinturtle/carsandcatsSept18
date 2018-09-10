const express = require("express");
const app = express();

app.set('views', __dirname +"/views");
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/cats', function(req, res) {
  res.render('cats');
})

app.get('/cats/cat1', function(req, res) {
  var lulu = {name: "Lulu", 
              toys: ["car", "boat", "airplane"]
             }
  res.render('details', {cat: lulu});
})

app.get('/cats/cat2', function(req, res) {
  var fisker = {name: "Fisker", 
              toys: ["fish", "car", "apple"]
             }
  res.render('details', {cat: fisker});
})

app.get('/cats/cat3', function(req, res) {
  var cola = {name: "Cola", 
              toys: ["hammer", "sword", "spike"]
             }
  res.render('details', {cat: cola});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})