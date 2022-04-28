const user = require("../modules/user.modules");

const register = async (req,res) => {
     try{
          let user = await user.findOne({email:req.body.email})
          
          if(user){
               return res.send("email already exists")
          }
          user = await user.create(req,body);
     }
     catch(err){
          return res.send({message:err.message})
     }
}

const login = async (req,res) => {
     try{
          let user = await user.findOne({email:req.body.email})
          
          if(!user){
               return res.send("please provide correct details")
          }
          const matchPassword = user.checkPassword(req.body.password)
     }
     catch(err){
          return res.send({message:err.message})
     }
}

module.exports = {register,login}