
export const FileFilter=(req,file,cb)=>{
    console.log("enter.....")
    const allowtype=/pdf/;
    const isAllowed=allowtype.test(file.mimetype);
    if(isAllowed){
        return cb(null,true);
    }else{
       return cb(new Error("file upload only pdf format"),false);
    }
}