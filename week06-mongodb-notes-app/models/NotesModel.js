const mongoose = require('mongoose');
//const noteRouter = require("../routes/NoteRoutes")
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    notePriority: {
        type: String,
        prior: [ "HIGH, MEDIUM, LOW"]
    },
    dateAdded: Date,
    dateUpdated: Date
});

module.exports = mongoose.model("notes", noteSchema)
 

/*
{
    noteTitle: "Lab6",
    noteDescription : "lab6 - MongoDB & nodeJS"
    priority: "High",
    dateAdded: "10-13-2022",
    dateUpdated: "10-15-2022",
}
*/