// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Book } = require('./models');

const app = express();
const PORT =  process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Sync the database
sequelize.sync();

// API routes

// Create a new book
app.post('/books', async (req, res) => {
  try {
    const { title, author, publishedDate,image,isbn, genre } = req.body;
    const newBook = await Book.create({ title, author, publishedDate,image,isbn, genre});
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//delete
app.delete('/books/:id', (req, res) => {
  const booksId = parseInt(req.params.id);
  booksId = booksId.filter(user => user.id !== booksId);
  res.send(`Deleted book with ID ${booksId}`);
});

// Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});
