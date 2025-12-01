import express from "express"
import { upload } from "../middleware/Upload.js";

const fileUpload=express.Router();

fileUpload.post("/file",upload.single("pdf"),(req,res)=>{
    return res.json({msg:"file uploaded",data:req.file});
})
export default fileUpload;