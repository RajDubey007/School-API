import { Router } from "express";
import { postloginData } from "../../Controllers/login/login_con.js";

const login_Route = Router();

login_Route.post("/", postloginData);

export default login_Route;