import { Router } from "express";
import register_Route from "./users/register_Route.js";
import login_Route from "./users/login_Route.js";
import principal_Route from "./principal_Route.js";
import student_Route from "./student_Route.js";
import teacher_Route from "./teacher_Route.js";

const router = Router();

router.use("/register", register_Route);
router.use("/login", login_Route);
router.use("/principal", principal_Route);
router.use("/students", student_Route);
router.use("/teachers", teacher_Route);

export default router;