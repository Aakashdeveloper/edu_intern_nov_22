var a = {} //object
var b = [] //Array

var moviename = "Jab we met"
var movierating = 4.7
var movieInd = "Bollywood"

var moviename1 = "Avengers"
var movierating1 = 4.5
var movieInd1 = "Hollywood"

var movie={
    name:"Jab we met",
    rating:4.7,
    Ind:"Bollywood"
}

movie.name
'Jab we met'
movie.rating
4.7
movie.rating = 4.8
4.8
movie
{name: 'Jab we met', rating: 4.8, Ind: 'Bollywood'}
movie.type = "Romantic"
'Romantic'
movie
{name: 'Jab we met', rating: 4.8, Ind: 'Bollywood', type: 'Romantic'}
delete movie.Ind
true
movie
{name: 'Jab we met', rating: 4.8, type: 'Romantic'}
movie['Ind']
'Bollywood'


JSON > Javascript Object notation
var movies = [
    {
        "name":"Jab we met",
        "rating":4.7,
        "Ind":"Bollywood"
    },
    {
        "name":"Avengers",
        "rating":4.5,
        "Ind":"Hollywood"
    }
]


var movie={
    name:"Jab we met",
    rating:4.7,
    Ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}
name
rating
Ind



for(key in movie){
    console.log(movie[key])
}
Jab we met
4.7
Bollywood