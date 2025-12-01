import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { FileFilter } from '../services/FileFilter.js';

let filesize=5*1024*1024;

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./Uploads")
    },
    
    filename:(req,file,cb)=>{
        const extension=path.extname(file.originalname );
        //const newName=`${Date.now()}${extension}`;
        const newName=`${uuidv4()}${extension}`;
        cb(null,newName);
    }
})
export const upload = multer({ storage:storage,
    limits:{
        fileSize:filesize,  
    },
    fileFilter:FileFilter,});
