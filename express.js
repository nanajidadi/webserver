
// Import required libraries
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Render, or default to 3000

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, nanaji!');
});
