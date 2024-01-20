import express from "express";
import "dotenv/config";
import signupRoutes from "./routes/index.js";
import "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000; 

app.set("view engine", "ejs");

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", (req, res) => {
    res.send("Welcom to blogs site");
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))

app.use("/api", signupRoutes)