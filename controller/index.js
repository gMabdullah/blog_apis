import RegisterModel from "../model/index.js";

export const registerUser = async (req, res) => {
    const {firstname, lastname, email, password, cpassword } = req.body;
    try{

        const existingUser = await RegisterModel.findOne({ email })

    if(existingUser){
        return res.status(409).json({
            status: "Failed",
            results: "Email is already registered",
        })
    }

    if(!firstname){
        return res.status(400).json({
            status: "Failed",
            results: "Username is Must",
        })
    }else if(!password || !cpassword) {
        return res.status(400)
        .json({
            status: "Failed",
            results: "Passwords enter password to proceed",
          });
    }else if (password !== cpassword) {
        return res.status(400)
        .json({
            status: "Failed",
            results: "Passwords do not match",
          });
    }

        const results = new RegisterModel({
            firstname, lastname, email, password, cpassword
        })
    
        await results.save();
    
        res.status(200).json({
            status: "Success",
            results: "User Successfully Created",
        });

    }catch(error){
        res.status(500)
        .json({
            status: "Failed",
            results: error,
          });
    }
}
