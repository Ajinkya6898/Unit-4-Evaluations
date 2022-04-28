const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
     title:{type:String, required:true},
     user_ID: {type:mongoose.Schema.Types.ObjectId, ref:"User", required:true}
},{
     versionKey:false,
     timestamps:true
});

module.exports = mongoose.model("todo",todoSchema);