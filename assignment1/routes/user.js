const userModel = require("../models/userModels");
const express = require("express")
//const routes = express.Router()
const mongoose = require("mongoose")
const routes = express()
const bcrypt = require("bcrypt")

// User signup
routes.post("/signup", async(req, res) => {
    if(req.body.body) {
        return res.status(400).json({
            message: "Content Can Not Be Empty"
        });
    }
    
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new userModel({username: req.body.username, email: req.body.email, password: hashedPassword});
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(500).json(error)
    }
})

// User login
routes.post("/login", async(req, res) =>{
    if(req.body.body) {
        return res.status(400).json({
            message: "Content Can Not Be Empty"
        });
    }
    
    try{
        const user = await userModel.findOne(req.body.username);
        if(!user){
            res.status(400).json("Could not find the user")
        }
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json(error)
    }
});

module.exports = routes;