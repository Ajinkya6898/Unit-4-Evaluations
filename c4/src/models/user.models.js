const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
     firstName:{type:String, required:true},
     lasttName:{type:String, required:true},
     email:{type:String, required:true},
     password:{type:String, required:true},
},{
     versionKey:false,
     timestamps:true
});

userSchema.pre("save", function(next) {
     const hash = bcrypt.hashSync(this.password,12);
     this.password = hash;
     return next();
});

userSchema.method.checkpassword = function(password){
     return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model("User",userSchema);