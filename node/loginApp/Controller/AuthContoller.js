const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../Model/userModel');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

// get all the users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//register user
router.post('/register',(req,res) => {
    User.find({email:req.body.email},(err,data) => {
        if(data.length>0){
            res.end('Email Already Taken')
        }else{
            // encrypt password
            let hashpassword = bcrypt.hashSync(req.body.password,8)
            User.create({
                name:req.body.name,
                email:req.body.email,
                password:hashpassword,
                phone:req.body.phone,
                role:req.body.role?req.body.role:'User'
            },(err,result) => {
                if(err) res.send(`Error While Register`);
                res.send('Registration successful')
            })
        }
    })
})

//login user
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) res.send({auth:false,token:'Error While Logging'});
        if(!user) res.send({auth:false,token:'No User Found'});
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) res.send({auth:false,token:'Invalid Password'})
            //in case both correct
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400}) //24 hrs
            res.send({auth:true, token:token}) 
        }
    })
})

// userinfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) res.send({auth:false,token:'No Token Provided'});
    // jwt verify
    jwt.verify(token,config.secret,(err,user) => {
        if(err) res.send({auth:false,token:'Invalid Token'})
        User.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})


module.exports = router
