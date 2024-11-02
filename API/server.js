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


app.post('/profile',(req, res) => {
  const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;
  
  console.log("Entry point for /profile");

  if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.'
    });
  }

  const profileData = {
    Name,
    Title,
    TargetedKeywords,
    Education,
    Certification,
    Contact
  };

  const profilesPath = path.join(__dirname, 'profiles.json');

  fs.appendFile(profilesPath, `${JSON.stringify(profileData,null,2)},\n`, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Could not append profile data to the file.'
      });
    }

    res.json({
      success: true,
      message: 'Profile saved successfully!'
    });
  });
});

app.get('/profiles', (req, res) => {
    const profilesPath = path.join(__dirname, 'profiles.json');
  
    // Read the profiles JSON file
    fs.readFile(profilesPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Could not read profiles data.'
        });
      }
  
      
      try {
        const profiles = JSON.parse(`[${data.slice(0, -2)}]`); 
        res.status(200).json({
          success: true,
          profiles
        });
      } catch (parseErr) {
        res.status(500).json({
          success: false,
          message: 'Error parsing profiles data.'
        });
      }
    });
  });

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

