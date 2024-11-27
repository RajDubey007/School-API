import { Router } from "express";
import { getStudentData, postStudentData} from "../Controllers/student_con.js";
import veryfayToken from "../middlewares/auth_middleware.js";
const student_Route = Router();

student_Route.get("/", veryfayToken("master", "principale", "teacher"), getStudentData);
student_Route.post("/", postStudentData);

export default student_Route;