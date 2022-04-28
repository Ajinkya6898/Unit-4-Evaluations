const express = require("express");

const User = require("../models/todo.models");

const router = express.Router();

router.get("",async (req,res) =>{

     try{
          const todo = await User.find().lean().exec();
          return res.status(200).send({todo:todo})
     }
     catch(err){
          return res.status(500).send({message : "Something Went Wrong"})
     }
});

router.post("",async (req,res) =>{

     try{
          const todo = await User.create(req.body);
          return res.status(201).send({todo:todo})
     }
     catch(err){
          return res.status(500).send({message : err.message})
     }
});

router.get("",async (req,res) =>{

     try{
          const todo = await User.findById(req.params.id);
          return res.status(200).send({todo:todo})
     }
     catch(err){
          return res.status(500).send({message : "Something Went Wrong"})
     }
});

router.patch("",async (req,res) =>{

     try{
          const todo = await User.findByIdAndUpdate(req.params.id);
          return res.status(200).send({todo})
     }
     catch(err){
          return res.status(500).send({message : "Something Went Wrong"})
     }
});

router.delete("",async (req,res) =>{

     try{
          const todo = await User.findByIdAndDelete(req.params.id);
          return res.status(200).send({todo})
     }
     catch(err){
          return res.status(500).send({message : "Something Went Wrong"})
     }
});


module.exports = router;