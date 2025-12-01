import jwt from "jsonwebtoken"

export const generateToken=(req)=>{

    return jwt.sign(req,process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}


