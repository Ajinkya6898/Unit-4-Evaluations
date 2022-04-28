const app =require("./index.js");
const connect = require("./configs/db");


app.listen(4000,async function () {
     try{
          await connect ();
          console.log("listening on poet 4000");
     }
     catch(err){
          console.log(err.message);
     }
})