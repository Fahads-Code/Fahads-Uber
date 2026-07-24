const mongoose = require("mongoose");
const debug = require("debug")("database:connection");

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log(err);
})