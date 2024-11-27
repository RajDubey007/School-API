import { Router } from "express";
import { getTeacherData, postTeacherData } from "../Controllers/teacher_con.js";
import veryfayToken from "../middlewares/auth_middleware.js";
const teacher_Route = Router();

teacher_Route.get("/", veryfayToken(["master", "principale", "teacher"]) ,getTeacherData);
teacher_Route.post("/", postTeacherData);

export default teacher_Route;