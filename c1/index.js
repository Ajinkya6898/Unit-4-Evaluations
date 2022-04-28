const express = require('express');

const app = express();

app.use(logger);

app.get('/books',(req,res) =>{
     res.send('{ route: "/books"}')
});

app.get('/libraries',(req,res) =>{
     res.send('{ route: "/libraries" permission: true}')
});

app.get('/authors',(req,res) =>{
     res.send('{ route: "/authors"permission: true}')
});

function logger(req,res,next){
     console.log("logger");
     next();
}

function checkPermission(position){
     return function logger (req,res,next){
          if(position === "libraries"){
               return next()
          }
          else if(position === "author"){
               return next()
          }
     }
}
app.listen (5000);