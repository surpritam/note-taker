# Note Taker App

## Overview
The Note-Taker app is a simple web application that allows users to write, save, and delete notes. It is built using Node.js and Express.js, with the notes being stored in a JSON file on the server.

## Features
- Create new notes with a title and body.
- View saved notes.
- Delete notes.

## Technologies Used
- Node.js
- Express.js
- UUID for unique note IDs
- File System (fs) module for reading and writing notes

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/note-taker.git
   cd note-taker
   ```
2. **Install dependencies**
   ```bash
   cd Develop
   npm install
   ```
3. **Run the application**
   ```bash
   node server.js
   ```
## Deployment
The note-taker app is currently deployed using Render <a href="https://note-taker-lrg1.onrender.com/" target="_blank">here</a>

## Demo
Here's a live <a href="https://drive.google.com/file/d/1K_h1eJzJzYJUEuNr5gnsUnXZrjtgw2xI/view?usp=drive_link" target="_blank">demo</a> of the note-Taker app.

## API Enpoints
- HTML Routes
  - GET /notes - Returns the notes.html file.
  - GET * - Returns the index.html file for all other routes.
    
- API Routes
  - GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
  - POST /api/notes - Receives a new note to save, adds it to db.json, and returns the new note.
  - DELETE /api/notes/:id - Deletes the note with the given ID from db.json and returns a confirmation message.
 
## Sreenshot
![Screenshot 2024-07-01 at 12 12 50 PM](https://github.com/surpritam/note-taker/assets/26510803/5863ad05-59e3-4280-a729-eab8c345569b)
 
## Author
<a href="https://github.com/surpritam" target="_blank">surpritam</a>
