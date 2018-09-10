	//EJS CARS AND CATS SERVER.JS

	//--- SETUP ---------------------------------------------------------

	// LOAD EXPRESS MODULE IN var express;
	// INVOKE EXPRESS IN var app;
	// SET STATIC DIR;
	// SET EJS DIR;
	// SET VIEW ENGINE TO EJS

	var express = require("express");
	var app = express();
	app.use(express.static(__dirname + "/static"));
	app.set('views', __dirname + '/views'); 
	app.set('view engine', 'ejs');
	
	// console.log("Let's find out what express is.\n\nExpress:\n\n", express);
	// console.log("\nLet's find out what app is.\n\nApp:\n\n", app);

	//--- ROUTES ---------------------------------------------------------

	// use app's get method and pass it the base route '/' and a callback
	// use the response object's .send() method to respond with an h1

	app.get("/", function(request, response) {
		response.render('index');
	})
	
	app.get("/cars", function(request, response) {
		response.render('cars');
	})

	app.get("/cats", function(request, response) {
		response.render('cats');
	})
	app.get("/cars/mercedes", function(request, response) {
		var carData = [
			{ image: "car1.jpeg", make: "Mercedes Benz", model: "ES 550", cupholders: 8, races_won: ["Nurbring", "Dakkar Rally", "Oktoberfest"]},
		];
		response.render('carDetail', {cars: carData});
	})

	app.get("/cars/ferarri", function(request, response) {
		var carData = [
			{ image: "car2.jpeg", make: "Ferarri", model: "Enzo", cupholders: 2, races_won: ["Roma", "Monaco", "Americas Cup"]},
		];
		response.render('carDetail', {cars: carData});
	})

	app.get("/cars/chevy", function(request, response) {
		var carData = [
			{ image: "car3.jpeg", make: "Chevy", model: "57 Bel Air", cupholders: 0, races_won: ["Daytona", "Indy 500", "Three-legged egg-toss"]},
		];
		response.render('carDetail', {cars: carData});
	})

	app.get("/cars/audi", function(request, response) {
		var carData = [
			{ image: "car4.jpeg", make: "Audi", model: "A99", cupholders: 99, races_won: ["Human", "xyz", "that's all folks!"]},
		];
		response.render('carDetail', {cars: carData});
	})
	
	app.get("/cats/fluffy", function(request, response) {
		var catData = [
			{ image: "cat1.jpeg", name: "Fluffy", human: "mom", favorite_foods: ["mousies", "birdies", "catnip"]},
			
		];
		response.render('catDetail', {cats: catData});
	})

	app.get("/cats/tiny", function(request, response) {
		var catData = [
			{ image: "cat2.jpeg", name: "Tiny", human: "(eaten)", favorite_foods: ["wildebeast", "gazelle", "hunters"]},
			
		];
		response.render('catDetail', {cats: catData});
	})

	app.get("/cats/spike", function(request, response) {
		var catData = [
			{ image: "cat3.jpeg", name: "Spike", human: "Franklin", favorite_foods: ["friskies", "iams", "happy-cat"]},
			
		];
		response.render('catDetail', {cats: catData});
	})

	app.get("/cats/greybeard", function(request, response) {
		var catData = [
			{ image: "cat4.jpeg", name: "Greybeard", human: "Jane", favorite_foods: ["this", "that", "the other thing"]},
			
		];
		response.render('catDetail', {cats: catData});
	})
	




	//--- LISTEN ---------------------------------------------------------

	// tell the express app to listen on port 8000
	app.listen(8000, function() {
		console.log("listening on port 8000");
	})
