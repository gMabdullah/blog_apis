import { Router } from "express";
import { registerUser, getUsers } from "../controller/index.js";

const router = Router();

router.post("/register_user", registerUser)

router.get("/get-users", getUsers);

export default router;