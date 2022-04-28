const express = require("express");

const { body, ValidationResult} = require('express-validation');

const user =require("../modules/user.modules");

const router =express.Router();

router.post("/",
body("firstname")
     .not()
     .isEmpty()
     .withMessage("First Name can not be empty!")
     .isLenght({min:3})
     .withMessage("First Name can not be less than 3 letters")
     .isLenght({max:30})
     .withMessage("First Name can not be greater than 30 letters")
)
body("lastname").custom ((value) => {
     if(value && value.length < 3){
          throw new error ("Minimum length should be at least 3")
     }
     return true;
});

body("lastname").custom ((value) => {
     if(value && value.length > 30){
          throw new error ("Max length should be 30")
     }
     return true;
});

body(age)
     .not()
     .isEmpty()
     .withMessage("Age can not be empty!")
     .isNumeric()
     .custom ((value) => {
          if(value < 1 || value >150){
               throw new error ("Age should be between 1 to 150 only")
          }
          return true;
     });

     async(req,res) => {
          try{
               const errors = ValidationResult(req);
               if (!errors.isEmpty()) {
               return res.send({errors: errors.array()});
               }
          }
          catch(err){
               return res.send({message:err.message});
          }
     }
     
module.exports = router; 