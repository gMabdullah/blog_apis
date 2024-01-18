import { Router } from "express";
import { registerUser } from "../controller/index.js";

const router = Router();

router.get("/register", (req, res) => {
    res.render("register")
});

router.post("/register_user", registerUser)

export default router;