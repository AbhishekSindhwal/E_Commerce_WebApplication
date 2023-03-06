const express=require("express");
const dotenv=require("dotenv");
// import express from "express"
// import dotenv from "dotenv"
// import {dbConnect} from './dbConnect.js';

const mongoose=require("mongoose");
dotenv.config("./.env");
const app=express();

let PORT=process.env.PORT || 4000 ;

app.get('/',(req,res)=>{
    res.status(200).send("kartikeya bhatt");
})
// dbConnect();
const mongoUri='mongodb+srv://bhattkartikeya99:28iohu1V9zIzmLhT@cluster0.1zmsuwk.mongodb.net/socialMedia?retryWrites=true&w=majority' 
  try {
        const connect=mongoose.connect(mongoUri,{
        useNewUrlParser: true,
         useUnifiedTopology: true,
       });
       console.log(`mongodp connected KARTIKEYA BHATT: ${connect}`)
  } catch (error) {
    //console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
    console.log(error);
   // console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
    process.exit(1);
  }
console.log("my port number is "+ PORT);
app.listen(4000,()=>{
    console.log(`listning on the port : ${PORT}`);
});


