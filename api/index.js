const express = require("express");
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Todos GET Request");
});

app.post('/', (req, res) => {
    res.send("Todos POST Request");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
