import express from "express";
import "dotenv/config";
import signupRoutes from "./routes/index.js";
// import RegisterModel from "./model/index.js";
import "./config/db.js";

const app = express();
const PORT = process.env.PORT || 8000; 

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send("hi there");
})

// app.get("/register", (req, res) => {
//     res.render("register")
// });

// app.post("/register_user", (req, res) => {
//     const {firstname, lastname, email, password, cpassword } = req.body;

//     const results = new RegisterModel({
//         firstname, lastname, email, password, cpassword
//     })
//     // res.send(results).status(200);
// })

app.use("/", signupRoutes)

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))