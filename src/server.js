const express = require("express");
const mongoose = require("mongoose");
const user = require('./routers/user.js');
const db ="mongodb+srv://kowshitha:kowshi@cluster0.cs1vo.mongodb.net/rest?retryWrites=true&w=majority";
const port = 5000;
const app = express();
app.use(express.json())
mongoose.connect(db,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log({err: err });
})
//app.get('/',(req,res)=>{
    //res.send("hello")
    //})
    app.use('/users',user);
    app.listen(port,(err)=>{
        if(err){
            console.log( {err : err});
        }
        console.log("server running on port" +port);
        });