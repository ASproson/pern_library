const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

// Config/Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Listen
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
