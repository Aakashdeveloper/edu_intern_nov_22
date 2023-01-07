let express = require('express');
let app = express();
let port = 9310;

app.get('/',(req,res) => {
    res.send('Hii from express')
})

app.get('/location',(req,res) => {
    res.send('Hii from location')
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})