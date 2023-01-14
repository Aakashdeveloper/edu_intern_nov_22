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
app.get('/restaurant/:id',(req,res) => {
    console.log(req.params.id)
    let state_id = Number(req.params.id)
    db.collection('restaurants').find({state_id:state_id}).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


// get all Restaurants
app.get('/restaurants',(req,res) => {
    console.log(req.query.stateId)
    let query = {}
    let stateId = Number(req.query.stateId)
    let mealId = Number(req.query.mealId)
    
    if(stateId){
        query={state_id:stateId}
    }else if(mealId){
        query={"mealTypes.mealtype_id":mealId}
    }else{
        query = {}
    }
    db.collection('restaurants').find(query).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

// get all mealType
app.get('/mealtype',(req,res) => {
    db.collection('mealType').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

// get all mealType
app.get('/details/:restId',(req,res) => {
    let restaurant_id = Number(req.params.restId);
    /* http://localhost:9310/details/6288d22dbb17b75750d11caf
    let id = mongo.ObjectId(req.params.restId);
    */
    db.collection('restaurants').find({restaurant_id}).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//// listing page data
app.get('/filter/:mealId',(req,res)=>{
    let mealId = Number(req.params.mealId);

})


// menu wrt to restaurants
app.get('/menu/:restId',(req,res) => {
    let rest_id = Number(req.params.restId)
    db.collection('menu').find({restaurant_id:rest_id}).toArray((err,data) => {
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


/*
app.get('/restaurant/:id',(req,res) => {
    console.log(req.params.id)
    let state_id = Number(req.params.id)
    db.collection('restaurants').find({state_id:state_id}).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})
*/