const express = require("express");

const mongoose = require("mongoose");

const app = express ();

app.use(express.json());

const connect = () => {
     return mongoose.connect("mongodb://127.0.0.1:27017/c2");
};

//We need to create the following Schemas

//User 

const userSchema = mongoose.Schema({
     firstName :{type:String,required:true},
     middleName :{type:String,required:false},
     lastName :{type:String,required:true},
     age :{type:String,required:true},
     email :{type:String,required:true},
     gender:{type:String,required:true,default:"female"},
     userId:{type:mongoose.Schema.Types.ObjectId,ref:"Master"},
},{
     timestamp:true
});

//user model

const User = mongoose.model("User",userSchema);

//BranchDetail

const branchSchema = new mongoose.Schema({
     name :{type:String,required:true},
     address :{type:String,required:true},
     IFSC:{type:String,required:true},
     MICR:{type:Number,required:true},
},{
     timestamp:true
});

//branch model

const BranchDetails = mongoose.model("Branch", branchSchema);

//MasterAccount schema

const masterAccSchema = mongoose.Schema({
     balance:{type:String,required:true},
     branch_id:{type:mongoose.Schema.Types.ObjectId,ref:"Branch"},
     savingAcc_id:{type:mongoose.Schema.Types.ObjectId,ref:"SavingAcc"},
     fixedAcc_id:{type:mongoose.Schema.Types.ObjectId,ref:"FixedAcc"},
     user_id:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{
     timestamp:true
})

//Master Model

const MasterAccount = mongoose.model("Master", masterAccSchema);

//saving account schema

const savingAccSchema = mongoose.Schema({
     account_number:{type:String,required:true,unique:true},
     balance:{type:String,required:true},
     interestRate:{type:String,required:true},
},{
     timestamp:true
})

//saving account Model

const SavingAccount = mongoose.model("SavingAcc", savingAccSchema);

//FixedAccount

const fixedAccSchema = mongoose.Schema({
     account_number:{type:String,required:true,unique:true},
     balance:{type:String,required:true},
     interestRate:{type:String,required:true},
     startDate:{type:String,required:true},
     maturityDate:{type:String,required:true}
},{
     timestamp:true
})

//fiexed account Model

const FixedAccount = mongoose.model("FixedAcc", fixedAccSchema);

//cude operations:-

app.get("/users", async (req,res) => {

     try{
          const Users = await MasterAccount.find().lean().exec();
          return res.send({user:Master_Account});
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});

app.post("/savingAcc", async (req,res) => {

     try{
          const User = await SavingAccount.create(req,body).lean().exec();
          return res.send(user);
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});

app.post("/fixedAcc", async (req,res) => {

     try{
          const User = await FixedAccount.create(req,body).lean().exec();
          return res.send(user);
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});


app.get("/users", async (req,res) => {

     try{
          const User = await MasterAccount.find().populate({path:"",select:["account_number","balance"]}).lean().exec();
          return res.send({user:Master_Account});
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});

app.delete("/fixedAcc/:id", async (req,res) => {

     try{
          const User = await FixedAccount.findById(req.params.id).lean().exec();
          return res.send({user:Master_Account});
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});

app.post("/fixedAcc", async (req,res) => {

     try{
          const User = await FixedAccount.get(req,body).lean().exec();
          return res.send(user);
     }
     catch(err){
          return res.status(500).send({message :"Something goes Wrong"})
     }
});


app.listen (2550,async() =>{
     try{
          await connect();
     } catch(err){
          console.log(err);
     }

     console.log("listening on port 2550");
});