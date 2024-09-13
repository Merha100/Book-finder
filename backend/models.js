// backend/models.js
const { Sequelize, DataTypes } = require('sequelize');

// Update the connection string with your database credentials
const sequelize = require("./db/config.js");


const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishedDate: {
    type: DataTypes.STRING
  },
  image :{
    type: DataTypes.STRING
    
  },
  genre:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING, // For ISBN-13
    allowNull: false,
    unique: true
  }
});

module.exports = { sequelize, Book };
