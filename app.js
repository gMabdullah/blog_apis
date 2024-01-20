import express from "express";
import "dotenv/config";
import signupRoutes from "./routes/index.js";
// import RegisterModel from "./model/index.js";
import "./config/db.js";

const app = express();
const PORT = process.env.PORT || 8000; 

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcom to blogs site");
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


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))

app.use("/api", signupRoutes)