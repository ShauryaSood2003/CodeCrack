import express, { urlencoded } from "express";
import { createClient } from "redis";

import { AdminRoute } from "./routes/admin";

import prisma from "./db/db";

import cors from "cors";

const app=express();
const client=createClient();

const PORT=4000

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors())

app.use("/admin",AdminRoute);



app.post("/problemlist",async(req,res)=>{
    try{  
        const result=await prisma.problemList.findMany({});
        return res.status(200).json(result);
    }catch(e){
        console.log("Error: "+e);
        
    }
});

app.post("/problem/:id",async(req,res)=>{
    try{
        const id=Number(req.params.id);
        const result=await prisma.problemList.findMany({
            where:{
                id
            }
        });
        return res.status(200).json(result);
    }catch(e){
        console.log("Error: "+e);
        
    }
});

app.post("/submit",async(req,res)=>{
    try{
       const {code,test}=req.body;
       
       await client.lPush("problems",JSON.stringify({code,test}));
       return res.status(200).json({message:"Done!"});
    }catch(e){
        console.log("Error: "+e);
        
    }
});

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`);  
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();