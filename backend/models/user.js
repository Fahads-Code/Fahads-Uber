const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: [true, "First name is required!"],
            minLength: [3, "First name must be atleast 3 characters long"]
        },
        lastName: {
            type: String,
            minLength: [3, "Last name must be atleast 3 characters long"]
        }
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password must be required"]
    },
    sockedID: { // ---> id for tracking rider
        type: String,
    }
})

module.exports = mongoose.model("user", userSchema);