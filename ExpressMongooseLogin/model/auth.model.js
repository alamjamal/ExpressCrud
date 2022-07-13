require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const registerSchema= new mongoose.Schema({
    user_type:{type : String , required: true, trim: true},
    organisation : {type: String, trim: true},
    username: {type: String, required: true, trim: true},
    mobile:{type : String,required: true, trim: true},
    email:{type : String, required: true, trim: true,unique: true},
    password:{type:String,required: true, trim: true},
    // isPurchased :{type:Boolean,default:false}
    },
  {
    timestamps: true
  });

registerSchema.methods.generateToken = function() {

    const token = jwt.sign({_id:this.id}, process.env.TOKEN_SECRET);
    return token
}
const registerModel= mongoose.model('Register',registerSchema );

module.exports=registerModel;