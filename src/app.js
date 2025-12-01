import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './database/database.js';
import router from './routes/index.js';
import multer from 'multer';
import authRoute from "./routes/auth.js"
const app = express()
dotenv.config({ quiet: true });
connectDB();
app.use('/uploads', express.static('uploads'));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(process.env.PORT, () => { console.log("Server is running on port 5000"); });
app.use(cors({
    origin: ['http://localhost:5173', 'http://192.168.1.4:5173'],
    credentials: true
}))
app.use('/api', router)
app.use((err,req,res,next)=>{
    if(err instanceof multer.MulterError){
        switch(err.code){
            case "LIMIT_FILE_SIZE":
                return res.status(400).send("error: file too large maximum file is 1mb");
            default :
                return res.status(400).send(`error ${err.code}`)
        }
    }
    else{
        console.log("error");
        return res.status(400).json({msg:err.message})
    }
})
export default app;