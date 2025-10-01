const express = require('express');
const app = express();


// middleware
app.use(express.urlencoded({ extended: true }));

// create a global notes array
const notes = [{ "id": 1,"title": "My first note", "content": "This is the content of my note" }];
let id = 0;

//  Welcome
app.get('/', (req,res) => {
    res.send('Welcome to Notes API');
});

//  Create a Note
app.post('/notes', (req,res) => {
    id++;
    const new_notes = {"id" : id, "title" : req.body.title, "content" : req.body.content};
    
    notes.push(new_notes);
    res.redirect('/notes');
});

//  Get All Notes
app.get('/notes', (req, res) => {
    console.log(notes);
    res.send(notes);
});

// Get a Single Note
app.get('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);   // get the id parameter
    const [noteById] = notes.filter( note => note.id === noteId); // get the note object by id parameter
    if(noteById){
        console.log(noteById);
        res.send(noteById);
    }else{
        console.log(`There is no Note with id ${noteId}`);
    }
    
});

// Update a Note
app.put('/notes/:id', (req,res) => {
    const updateId = parseInt(req.params.id);
    const updateNotes = {"title" : req.body.title, "content" : req.body.content};

    try{
        const updateIndex = notes.findIndex( note => note.id === updateId ); // returns -1 if index doesn't exist
        notes[updateIndex] = {id : updateId, updateNotes};
        console.log(notes[updateIndex]);
        res.redirect('/notes');
    }catch(err){
        console.log(err);
    }
    
});

// Delete a Note
app.delete('/notes/:id', (req,res) => {
    const deleteId = parseInt(req.params.id);   // get the id parameter
    const deleteNotes = notes.filter( note => note.id !== deleteId);
    notes = deleteNotes;
    console.log(notes);
});

// handling 404 request
app.use((req,res) => {
    res.status(404);
});

// PORT number
const PORT = 3000;

// listening to request
app.listen(PORT, (err) => {
    if(err){
        console.error(err);
    }else{
        console.log(`Server running on port ${PORT}`);
    }
});