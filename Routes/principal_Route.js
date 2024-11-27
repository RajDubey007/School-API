import { Router } from "express";
import { getPrincipalData, postPrincipalData } from "../Controllers/principal.js";
import veryfayToken from "../middlewares/auth_middleware.js";

const principal_Route = Router();

principal_Route.get("/", veryfayToken(["master", "principale"]), getPrincipalData);
principal_Route.post("/", postPrincipalData);
export default principal_Route;