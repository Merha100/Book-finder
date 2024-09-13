
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BookList.css"
import classNames from 'classnames';
import "../button/ButtonStyle.css"
import { useNavigate } from 'react-router-dom';


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleBooks, setVisibleBooks] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react');
        
        setBooks(response.data.items);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        }finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  const filteredBooks = books.filter(book =>
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.volumeInfo.authors?.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

 
  const handleEdit = (bookId) => {
    navigate('/book/new') 
    history.push(`/books/${bookId}`);
  }
  const handleDelete = (bookId) => {
    const updatedBooks = books.filter(book => book.id !== bookId);
    setBooks(updatedBooks);
  };
  

  const handleViewMore = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 5); // Show 5 more books
  };
  const handleViewLess = () => {
    setVisibleBooks(prevVisibleBooks => Math.max(prevVisibleBooks - 5, 5)); 
  };
  return (
    
    <div className="book-list">
      
      <h1>Book List</h1>
      <input classname='Search-input'
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '300px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          marginLeft:"auto",
          maxHeight: '30px', 
        }}
      />
      <ul>
    
      {filteredBooks.slice(0, visibleBooks).map((book,index) => (
         
        <li key={index} className="book-item">
         
         <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3 className='book-title small-title'>{book.volumeInfo.title}</h3>
          <p className='book-author'>{book.volumeInfo.authors?.join(', ')}</p>
          <div className="button-container">
          <button className={classNames('common-button','delete-button')} onClick={() => handleDelete(book.id)}>Delete</button>
          <button className={classNames('common-button','edit-button')}onClick={() => handleEdit(book.id)}>Edit</button>
        </div>
        </li>
      ))}
      
      </ul>
      <div className="view-buttons">
        {visibleBooks < books.length && (
          <button className="view-more-button" onClick={handleViewMore}>View More</button>
        )}
        {visibleBooks > 5 && (
          <button className="view-less-button" onClick={handleViewLess}>View Less</button>
        )}
        
      </div>
      
    </div>
    
  );
};

export default BookList;

  