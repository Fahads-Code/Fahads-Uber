const dotenv = require("dotenv");
dotenv.config(); // yahan pr ham dotenv ko use kar rahain hain taake env file se values le sakain
const cors = require("cors");
const express = require("express");
const dbConnection = require("./config/database");
const cookieParser = require("cookie-parser")

const app = express();
const userRoute = require("./routes/user.route");
const captianRoute = require("./routes/captian.route");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use("/users", userRoute);
app.use("/captian", captianRoute);
app.get("/", (req,res)=>{
    res.send("Server is running");
})

module.exports = app;