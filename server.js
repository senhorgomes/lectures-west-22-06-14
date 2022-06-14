const express = require("express");
const morgan = require("morgan")
const app = express();
const bodyParser = require("body-parser")
const port = 3000;

///MOCK DATABASE
const marvelDatabase = [
  {id: 0, name: "Black Panther", movies: 1},
  {id: 1, name: "Captain Marvel", movies: 1},
  {id: 2, name: "Captain America", movies: 3},
  {id: 3, name: "Thor", movies: 3},
  {id: 4, name: "Iron Man", movies: 3},
  {id: 5, name: "Black Widow", movies: 1},
  {id: 6, name: "Spider-Man", movies: 8},
  {id: 7, name: "Deadpool", movies: 2},
]


////MIDDLEWARE
app.use(morgan('dev'))
//IN SOME CASES BODY-PARSER WILL BE DEPRECATED AND ALREADY INCLUDED IN EXPRESS
app.use(bodyParser.urlencoded({extended: true})) 

//SETTING THE TEMPLATE ENGINE TO BE EJS (Embedded Javascript)
app.set('view engine', 'ejs')


///////GET ROUTES
//Index page, where a list of all heroes are
app.get("/", (req, res) => {
  res.render("index", {marvelDatabase: marvelDatabase, titleForPage: "COOL SUPERHEROES"})
})
//Adding a new hero to the database
app.get("/newhero", (req, res) => {
  res.render("addNew")
})
//Editing a specific hero in the database
app.get("/edithero/:id", (req, res) => {
  res.render("editSuper", {hero: marvelDatabase[req.params.id]})
})

///////POST ROUTES
//Creates a new hero
app.post("/newhero", (req, res) => {
  const newHero = {
    id: marvelDatabase.length,
    name: req.body.superheroName,
    movies: req.body.movies
  }
  marvelDatabase.push(newHero)
  res.redirect("/")
})
//Edits the specific hero, note the id of the hero is passed in
app.post("/edithero/:id", (req, res) => {
  //We use req.params to bring in the parameter set in the url
  const editHero = {
    id: req.params.id,
    name: req.body.superheroName,
    movies: req.body.movies
  }
  marvelDatabase[req.params.id] = editHero
  res.redirect("/")
})
//Deletes the specific hero
app.post("/deletehero/:id", (req, res) => {
  marvelDatabase.splice(req.params.id, 1)
  res.redirect("/")
})

//Just a message to run when the server is up and running
app.listen(port, () => console.log(`Server is listening on Port ${port}`))