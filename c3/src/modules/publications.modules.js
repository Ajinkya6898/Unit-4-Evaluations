const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
     name:{type:String,required:true},
     userId :{type:mongoose.Schema.Types.ObjectId,ref:"book"}
},{
     versionKey:false,
     timestamps:true
});

module.exports = mongoose.model("publication",publicationSchema);