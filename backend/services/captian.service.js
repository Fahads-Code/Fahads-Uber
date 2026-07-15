const captianModel = require("../models/captian");

async function createCaptian(firstName, lastName, email, password, capacity, color, plate, vehicleType){
    if(!firstName || !email  || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    const captian = await captianModel.create({
        fullName: {
            firstName,
            lastName,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captian;
}

module.exports = {createCaptian};