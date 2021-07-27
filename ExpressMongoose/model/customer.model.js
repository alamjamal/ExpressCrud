const mongoose = require('mongoose');

const customerSchema= mongoose.model('Customer', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 50
      },
      password:{
        type:String,
        trim:true,
        required:true,
        minlength:4,
        maxlength:20,
      },
      email:{
          type : String,
          lowercase:true,
          trim:true,
          required:true,
          minlength:5,
          maxlength:50
      },
      isPurchased :{
          type:Boolean,
          default:false
      }
}) 
);

module.exports=customerSchema;