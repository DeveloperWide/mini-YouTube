import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/mini-youtube");
        console.log("Connected : ", conn.connection.host);
    }catch(err){
        console.log("Mongo Connection Error", err)
        process.exit(1);
    }
}