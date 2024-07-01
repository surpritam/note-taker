const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML routes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// API routes
app.get('/api/notes', (req, res) => {
    // console.log(path.join(__dirname, 'db', 'db.json'));
    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read notes' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post('/api/notes', (req, res) => {
    const newNote = { id: uuidv4(), ...req.body };
    console.log(req.body);

    fs.readFile(path.join(__dirname, 'db','db.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read notes' });
        } else {
            const notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFile(path.join(__dirname, 'db','db.json'), JSON.stringify(notes, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to save note' });
                } else {
                    res.json(newNote);
                }
            });
        }
    });
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read notes' });
        } else {
            let notes = JSON.parse(data);
            notes = notes.filter(note => note.id !== noteId);
            fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to save notes' });
                } else {
                    res.json({ message: `Note with id ${noteId} deleted` });
                }
            });
        }
    });
});

// Wild card route
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
