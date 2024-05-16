import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const route=Router();

route.post("/addProblems",async(req,res)=>{
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

export {route as AdminRoute}