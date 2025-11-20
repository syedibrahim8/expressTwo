import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

let a = "*";
app.get("/",(req,res)=>{
    try {
        console.log(a);
        res.status(200).json({msg:"Welcome"})  
        a += "*";
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }  
})
app.get("/home",(req,res)=>{
    try {
        res.status(200).json({msg:"Have a cup of tea"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.listen(port,()=>{
    console.log(`Shawty server is alive! http://localhost:${port}`);
})