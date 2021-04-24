const express = require('express');
const displayRoutes = require('./routes/display'); 
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://*******:*******@cluster0.l0sqv.mongodb.net/test`

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(displayRoutes);

app.get('/', (req,res)=> {
    res.send('Hello Flow!!')
})


mongoose.connect(MONGODB_URI)
    .then((result) => {
        app.listen( 3000);
    }).catch(err=>{
        console.log(err)
    })