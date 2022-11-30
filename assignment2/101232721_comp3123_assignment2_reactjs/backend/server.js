const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routers = express();
const bcrypt = require("bcrypt")

// add employee route
const employeeRouter = require("./routes/employee.js")
// add user route
const userRouter = require("./routes/user.js");


//routers.use(express.json()); 

const DB_URL = "mongodb+srv://qlows:ananinamizuck@cluster0.hm9ineu.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"

routers.use(bodyParser.urlencoded({ extended: true }))
routers.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//config the routers
routers.use("/api/user/", userRouter)
routers.use("/api/emp/", employeeRouter)

routers.route("/").get((req, res) => {
    res.send("<h1>Welcome to the backend app - assignment 1</h1>");
});

const SERVER_PORT = 3001
routers.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
}) 

