import { Router } from "express";
import prisma from "../db/db";
import adminMiddleware from "../middleware/adminauth";
const route=Router();

route.use(adminMiddleware);

route.post("/addProblems",async(req,res)=>{
    try{
        // @ts-ignore
        console.log(req.admin);
        
        const {title,content,tag}=req.body;
        
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