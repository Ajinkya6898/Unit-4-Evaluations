const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

const{register,login} = require("./controllers/auth.controller");

const todo = require("./controllers/todo.controller");

app.post("/register", register);

app.post("/login", login);

app.get("/todo", todo);

app.post("/todo", todo);

app.get("/todo:/id",todo);

app.patch("/todo:/id",todo);

app.delete("/todo:/id",todo);

app.listen(3500, async() => {
     try{
          await connect();
          console.log("listening on port 3500");
     }
     catch(err){
          console.log(err.message);
     }
})