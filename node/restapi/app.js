let express = require('express');
let app = express();
let port = 9310;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;
app.use(cors())


app.get('/',(req,res) => {
    res.send('Hii from express')
})

// get all location
app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


// get all Restaurants
app.get('/restaurants',(req,res) => {
    db.collection('restaurants').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error While Connecting');
    db = client.db('internfeb') // database name
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})

