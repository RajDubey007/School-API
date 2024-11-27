import { Router } from "express";
import { getregisterData, postregisterData } from "../../Controllers/register_con.js";

const register_Route = Router();

register_Route.get("/", getregisterData);
register_Route.post("/", postregisterData);

export default register_Route