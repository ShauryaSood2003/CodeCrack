import express, { urlencoded } from "express";
import { createClient } from "redis";
import { PrismaClient } from "@prisma/client";

const app=express();
const client=createClient();

const PORT=3000

app.use(express.json());
app.use(urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:"Safe!"})
})

app.post("/problemlist",async(req,res)=>{
    try{
        const prisma=new PrismaClient();
        const result=await prisma.problemList.findMany({});
        return res.status(200).json(result);
    }catch(e){
        console.log("Error: "+e);
        
    }
});

app.post("/addProblems",async(req,res)=>{
    try{
        
        const {title,content,tag}=req.body;
        const prisma=new PrismaClient();
        await prisma.problemList.create({
            data:{
                title,
                content,
                tag
            }
        })
        return res.status(200).json({message:"Added Your Problem Successfully!"})
    }catch(e){
        console.log("Error:"+e);
        return res.status(400).json({message:"Failed to Add the Problem"});
    }
})

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