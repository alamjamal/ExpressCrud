//express
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connnection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo', {useUnifiedTopology: true,useNewUrlParser:true,useFindAndModify:false})
.then(()=> console.log("connected"))
.catch(err=> console.log('Error', err));


//route

const course=require('./routes/course');
app.use('/api/course', course);
const customer = require('./routes/customer');
app.use('/api/customer', customer);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(3000,'localhost', ()=>{
    console.log("connection is created");
});