import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

let a = 10;
app.get("/",(req,res)=>{
   try {
    console.log(a);
    a++
    res.status(200).json({msg:"Welcome"})
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
   }
})
app.listen(port,()=>{
    console.log(`SERVER SHURU HOGAYA http://localhost:${port}`);
})