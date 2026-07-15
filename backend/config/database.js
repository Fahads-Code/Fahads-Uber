const mongoose = require("mongoose");
const debug = require("debug")("database:connection");

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(()=>{
    debug("Connected");
})
.catch((err)=>{
    debug(err);
})