import RegisterModel from "../model/index.js";

export const registerUser = (req, res) => {
    const {firstname, lastname, email, password, cpassword } = req.body;

    const results = new RegisterModel({
        firstname, lastname, email, password, cpassword
    })
    console.log(
        results
    )
    // res.send(results).status(200);
}
