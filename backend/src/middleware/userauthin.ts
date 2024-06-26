import jwt, {JwtPayload} from "jsonwebtoken";

const secret="MylittleSecret";

async function userMiddleware(req:any,res:any,next:any){
   
    try{
        const token=req.cookies.token;
       
        const decode=jwt.verify(token,process.env.JWT_SECRET || secret) as JwtPayload;
        if(!decode){
            return res.status(400).json({message:"NO auth access!"})
        }
        req.user=decode;
        return next();
    }catch(e){
        
        return res.status(400).json({message:"Sign In to continue"})
    }
}
export default userMiddleware;