import express from "express";
import "dotenv/config";
import signupRoutes from "./routes/index.js";
import "./config/db.js";
import cors from "cors";
import { getUsers } from "./controller/index.js";

const app = express();
const PORT = process.env.PORT || 8000; 

// app.set("view engine", "ejs");

// app.use(cors())
// app.use(cors({
//     origin: 'https://blog-client-ebon.vercel.app', // Replace with your client's origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://blog-client-ebon.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))

app.use("/api", signupRoutes)

// app.use("/", (req, res) => {
//     res.send("Welcome to Blog site")
// })
