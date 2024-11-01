// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());


function setCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}


app.use(setCorsHeaders);

//as the front end want to retrive some message from the server
app.get('/hello/amjad', (req, res) => {
  res.send('Hello, Amjad');
});




// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

