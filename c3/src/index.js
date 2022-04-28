const express = require("express");

const connect = require("./configs/db");

const userControllers =  require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("/users",userControllers)

app.post("/register",register)

//app.post("/comments", commentsSchema)

app.post("/login",login)


module.exports = app;