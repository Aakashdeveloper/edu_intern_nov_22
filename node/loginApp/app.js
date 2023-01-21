const express = require('express');
const app = express();
const db = require('./db');
const port = 5000;
const cors = require('cors');
app.use(cors());

const Authcontroller = require('./Controller/AuthContoller');
app.use('/api/auth',Authcontroller);

app.listen(port,() => {
    console.log(`Listing to port ${port}`)
})