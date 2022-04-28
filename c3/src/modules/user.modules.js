const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     firstName:{type:String,required:true},
     lastName:{type:String,required:false},
     age:{type:Number,required:true},
     email:{type:String,required:true,unique:true},
     userId :{type:mongoose.Schema.Types.ObjectId,ref:"book"}
},{
     versionKey:false,
     timestamps:true
});

//module

module.exports = mongoose.model("user",userSchema);