const noteModel = require('../models/NotesModel.js');
const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

/*
{
    noteTitle: "Lab6",
    noteDescription : "lab6 - MongoDB & nodeJS"
    priority: "High",
    dateAdded: "10-13-2022",
    dateUpdated: "10-15-2022",
}
*/

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    // Validate request
     /* if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }  */

    //TODO - Write your code here to save the note
    const notes = new noteModel(req.body);
    try{
        await notes.save();
        res.status(200).send(notes);
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes',async(req, res) => {
     // Validate request
     /* if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } */

    //TODO - Write your code here to returns all note
    const notes = await noteModel.find()
    try{
        res.status(200).send(notes);
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async(req, res) => {
     // Validate request
     /* if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } */

    //TODO - Write your code here to return onlt one note using noteid
    try{
        res.send(await noteModel.findById(req.params.noteid, req.body));
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put("/notes/:noteId", async (req, res) => {
    /* if (!req.body.content) {
        return res.status(400).send({
          message: "Note content can not be empty",
        });
      } */
      //TODO - Write your code here to update the note using noteid

      try{
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body.content);
        res.send("Updated successfully");
    }catch(error){
        res.status(500).send(error);
    }
    });         


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    
    /* if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } */
    //TODO - Write your code here to delete the note using noteid
    try {
        await noteModel.findByIdAndDelete(req.params.noteId);
        res.send("note Id deleted");
      } catch (error) {
        res.status(500).send(error);
      }
    });

module.exports = routes;