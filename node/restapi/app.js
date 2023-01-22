let express = require('express');
let app = express();
let cors = require('cors');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9310;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser')
let mongoUrl = "mongodb://localhost:27017";
let db;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


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
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let sort = {cost:1}
    let query = {}

    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(hcost && lcost){
        query={
            "mealTypes.mealtype_id":mealId,
            "$and":[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query={
            "mealTypes.mealtype_id":mealId
        }
    }

    db.collection('restaurants').find(query).sort(sort).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })

})

// menu wrt to restaurants
app.get('/menu/:restId',(req,res) => {
    let rest_id = Number(req.params.restId)
    db.collection('menu').find({restaurant_id:rest_id}).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//order
app.get('/orders',(req,res) => {
    let query = {}
    let email = req.query.email;
    if(email){
        query={email}
    }
    db.collection('orders').find(query).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})
// menu details
app.post('/menuItem',(req,res) =>{
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
})


///place order
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

// updateOrder
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

//delete Order
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
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


// /*
// app.get('/restaurant/:id',(req,res) => {
//     console.log(req.params.id)
//     let state_id = Number(req.params.id)
//     db.collection('restaurants').find({state_id:state_id}).toArray((err,data) => {
//         if(err) throw err;
//         res.send(data)
//     })
// })
// */