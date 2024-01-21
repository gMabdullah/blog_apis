import { Router } from "express";
import { registerUser } from "../controller/index.js";

const router = Router();

router.post("/register_user", registerUser)

router.get("/register", (req, res) => {
    res.render("register")
});

export default router;