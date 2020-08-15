const express = require('express');
const displayRoutes = require('./routes/display'); 
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

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

app.listen(3000, ()=>{
    console.log("This is happenning!!")
})