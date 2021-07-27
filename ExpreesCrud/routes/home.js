const express=require('express');
const home=express.Router();

//route home
home.get('/', (req,res)=>{
    res.send('<html> <bod><h1> connection succefull as a html </html> </bod></h1>');
});

module.exports=home;