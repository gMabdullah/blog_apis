import { Schema, model } from "mongoose";

const registerSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            // required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        cpassword: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

const RegisterModel = model("register", registerSchema);

export default RegisterModel;