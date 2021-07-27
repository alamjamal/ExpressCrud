const express = require("express");
const AuthMongoose=require('../model/auth.model');

const verify= require('./jwtAuth')
const authRouter = express.Router();

authRouter.get('/',[verify], async (req,res,next) => {
try{
// res.send(req.id)
const findUser= await AuthMongoose.findOne({_id:req.id})
res.json(findUser);
}catch(err){
next(err);}
});

module.exports=authRouter