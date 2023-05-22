const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/notes', (req, res) => {
    saved 
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err => {
            res.status(500).json(err)
        }))

    readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
  });

notes.post('/notes', (req,res) => {
    const {text} = req.body
    saved
        .saveNote(req.body)
        .then((note) => {
            res.json(note)
        })
        .catch((err => {
            res.status(500).json(err)
        }))
})

