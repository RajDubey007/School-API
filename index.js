import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import router from "./Routes/routes.js";
import schoolDB from "./db/school_APIs_db.js";
dotEnv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router 
app.use("/api/v1", router);

app.listen(PORT, (error) => {
    !error?console.log(`Server is Running at http://localhost:${PORT}/api/v1`):console.log(`Server is not Running`);    
})