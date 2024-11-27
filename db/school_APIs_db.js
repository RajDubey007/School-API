import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const schoolDB = mongoose.connect(`${process.env.MONGODB_URL}`).then((res) => {
    console.log("DB is Connected");
}).catch((error) => {
    console.log("DB is not Connected", error);
})

export default schoolDB;