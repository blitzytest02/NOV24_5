// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Define root endpoint - returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define evening endpoint - returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and bind to the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the server at http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET / -> "Hello world"`);
  console.log(`  - GET /evening -> "Good evening"`);
});
