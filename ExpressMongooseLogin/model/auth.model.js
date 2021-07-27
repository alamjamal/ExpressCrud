require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const registerSchema= new mongoose.Schema({
    username: {type: String,},
    password:{type:String,},
    email:{type : String},
    isPurchased :{type:Boolean,default:false}
});

registerSchema.methods.generateToken = function() {

    const token = jwt.sign({_id:this.id}, process.env.TOKEN_SECRET);
    return token
}
const registerModel= mongoose.model('Register',registerSchema );

module.exports=registerModel;