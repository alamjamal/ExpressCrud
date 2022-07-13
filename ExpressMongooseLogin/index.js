//express
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connnection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo', {useUnifiedTopology: true,useNewUrlParser:true})
.then(()=> console.log("connected"))
.catch(err=> console.log('Error', err));


//route

const auth=require('./routes/auth');
app.use('/api/auth', auth);

const afterAuth=require('./routes/afterAuth')
app.use('/api/user', afterAuth);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that! 404")
  })

app.use(function(err,req,res,next){
  res.status(500).send('Some Error')
})
app.listen(4000,'localhost', ()=>{
    console.log("connection is created");
});