const express=require("express")
const MongoClient=require("mongoose");
const dotEnv=require("dotenv");
const bodyParser=require("body-parser")

const app=express();



dotEnv.config();
const PORT=process.env.PORT ||9989;

MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Atlas Cloud connected successfully")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`my port is running on ${PORT} number`)
})