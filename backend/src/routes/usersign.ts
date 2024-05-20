import { Router } from "express";
import jwt from "jsonwebtoken"
import prisma from "../db/db";
import bcrypt from "bcrypt";

const secret="MylittleSecret";
const route=Router();


route.post("/signup",async(req,res)=>{
    try{
        const {email,fname,lname,password}=req.body;

        const hashed=await bcrypt.hash(password,10);

        const user=await prisma.user.create({
            data:{
                email,
                name:fname+lname,
                password:hashed,
                type:"user"
            }
        })

        if(!user){
            return res.status(400).json({message:"No user Created"});
        }
        const obj={
            id:user.id,
            name:user.name,
            type:user.type
        }
        const token=jwt.sign(obj,process.env.JWT_SECRET || secret);
        res.cookie("token",token)
        res.status(200).json(obj)
    }catch(e){
        console.log("Failed Auth");
        return res.status(400).json({message:'Failed'})
    }
});

route.post("/signin",async(req,res)=>{
    try{
        const {email,password}=req.body;
        
        const user=await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(!user){
            return res.status(400).json({message:"No such User Found"});
        }
        const check=await bcrypt.compare(password,user.password);
        if(!check){
            return res.status(400).json({message:"Wrong Password"});
        }
        const obj={
            id:user.id,
            name:user.name,
            type:user.type
        }
        const token=jwt.sign(obj,process.env.JWT_SECRET || secret);
        res.cookie("token",token)
        res.status(200).json(obj)
    }catch(e){
        console.log("Failed Auth");
        return res.status(400).json({message:'Failed'})
    }
});


export {route as UserAuth}
