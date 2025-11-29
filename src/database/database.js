import mongoose from "mongoose"

const connectDB = () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => { console.log("DataBase Connected Successfully"); })
        .catch((error) => { console.log("DataBase Connection Failed", error); });
}
export default connectDB;