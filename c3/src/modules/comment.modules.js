const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
     body:{type:String,required:true},
     userId :{type:mongoose.Schema.Types.ObjectId,ref:"book"},
     userId :{type:mongoose.Schema.Types.ObjectId,ref:"user"}
},{
     versionKey:false,
     timestamps:true
});

module.exports = mongoose.model("comment",commentsSchema);