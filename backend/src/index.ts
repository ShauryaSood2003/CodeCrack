import express, { urlencoded } from "express";
import { createClient } from "redis";

import { AdminRoute } from "./routes/admin";

import prisma from "./db/db";
import cookieParser from "cookie-parser";

import cors from "cors";
import { UserAuth } from "./routes/usersign";
import { AdminAuth } from "./routes/adminsign";
import userMiddleware from "./middleware/userauthin";

const app=express();
const client=createClient();

const PORT=4000

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(cookieParser());

app.use("/admin",AdminRoute);
app.use("/auth",UserAuth);
app.use("/auth/admin",AdminAuth);

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

app.post("/submit",userMiddleware,async(req,res)=>{
    try{
        // @ts-ignore
        const user:any=req.user;
       
        const {code,test,language}=req.body;
        
        await client.lPush("problems",JSON.stringify({code,test,user_id:user.id,language}));
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