const express = require('express');
const app = express();
const userRoutes = require("./src/routes/userRoutes")
require('dotenv').config();


// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
});
