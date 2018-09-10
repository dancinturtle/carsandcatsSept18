var express = require('express');

var app = express();

//Set Static Path
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('css', __dirname + '/static/css');
app.set('css', __dirname + '/static/images');

app.get('/cars',function (request,response){
    response.render('cars');
  });

app.get('/cats',function (request,response){
    response.render('cats');
  });

app.get('/form',function (request,response){
    response.render('form');
  });

app.get('/cuddles',function (request,response){
    var cats_array =
          {name: "Cuddles", favfood: "Spaghetti", age: 3, sleepingspots: ["under the bed","in a sunbeam"]};

    response.render('details',{cats: cats_array});
  });

app.listen(8000,function(){
  console.log("listening on 8000");
})
