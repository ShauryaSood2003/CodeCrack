import jwt, {JwtPayload} from "jsonwebtoken";

const secret="MylittleSecret";

async function adminMiddleware(req:any,res:any,next:any){
   
    try{
        const token=req.cookies.token;
       
        const decode=jwt.verify(token,process.env.JWT_SECRET || secret) as JwtPayload;
        if(!decode || decode.type!="admin"){
            return res.status(400).json({message:"NO auth access!"})
        }
        req.admin=decode;
        return next();
    }catch(e){
        
        return res.status(400).json({message:"Sign In to continue"})
    }
}
export default adminMiddleware;