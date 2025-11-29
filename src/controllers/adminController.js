import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import Admin from "../models/Admin.js"

const seedAdmin = async () => {
    const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash("admin", 10);
        let vr=await new Admin({ email: "admin@gmail.com", password: hashedPassword, role: "Admin" }).save();
        console.log("Admin user created",vr);
    }
};
seedAdmin();

const login=async (req,res)=>{

    try{
        console.log("enter2",req.body)
        const { email, password } = req.body;
         console.log(req.body)
        const admin=await Admin.findOne({email}).lean()
 
        if(!admin){
            res.status(404).json({success :false, error:"not found"})
        }
        const isMatch=await bcrypt.compare(password,admin.password)

        if(!isMatch){
            res.status(404).json({success:false,error:"wront password"})
        }
        const token=jwt.sign({_id:admin._id,role:admin.role},
            process.env.JWT_SECRET ,{expiresIn:"1d"}
        )
        res.status(200)
        .json({
            success:true, 
            token, 
    })
    }
    catch(error){
        res.status(400).json({ms:"ddddd"})
    }
}
export {login}