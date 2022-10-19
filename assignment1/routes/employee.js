const employeeModel = require("../models/employeeModels");
const express = require("express")
const routes = express.Router()
const mongoose = require("mongoose")

//User can create new employee
routes.post("/employees", async (req, res) => {
    if (req.body.content) {
        return res.status(400).send({
            message: "Content Can Not Be Empty"
        });
    }

    try {
        const employee = new employeeModel(req.body)
        await employee.save()
        res.status(201).send(employee)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

// User can get all employee list
routes.get("/employees", async (req, res) => {
    if (req.body.content) {
        return res.status(400).send({
            message: "Content Can Not Be Empty"
        });
    }

    try {
        const employee = await employeeModel.find({})
        res.status(200).send(employee)
    }
    catch (error) {
        res.status(400).send(error)
    }
})



// User can get employee details by employee id
routes.get("/employees/:id", async (req, res) => {
    if (req.body.content) {
        return res.status(400).send({
            message: "Content Can Not Be Empty"
        });
    }

    try {
        const employee = await employeeModel.findById(req.params.id)
        res.status(200).send(employee)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

// User can update employee details
routes.put("/employees/:id", async (req, res) => {
    if (req.body.content) {
        return res.status(400).send({
            message: "Content Can Not Be Empty"
        });
    }

    try {
        const updatedEmployee = await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        const newEmp = await updatedEmployee.save()
        res.status(200).send(newEmp)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

// User can delete employee by employee id
routes.delete("/employees/:id", async (req, res) => {
    if (req.body.content) {
        return res.status(400).send({
            message: "Content Can Not Be Empty"
        });
    }

    try {
        await employeeModel.findByIdAndDelete(req.params.id)
        res.send("Employee Deleted Successfully.")
        /*  if(!employee){
             res.status(404).send("No Records Found.")
         }
         else{
             
         } */

    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = routes;