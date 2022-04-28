const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
     like:{type:Number,default:0},
     content:{type:String,required:true},
},{
     versionKey:false,
     timestamps:true
});

module.exports = mongoose.model("book",bookSchema);