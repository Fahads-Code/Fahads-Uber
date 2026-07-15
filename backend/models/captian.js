const mongoose = require("mongoose");

const captianSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: [true, "First Name is required"],
            minLength: [3, "First Name must be atleast 3 characters long"],
        },
        lastName: {
            type: String,
            minLength: [3, "Last Name must be atleast 3 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    sockedId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be atleast 3 characters long"]
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be at least 3 characters long"]
        },
        capacity: {
            type: String,
            required: true,
            min: [1, "Capacity must be atleast 1"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["bike", "car", "auto"]
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        }
    }
})

module.exports = mongoose.model("captian", captianSchema)