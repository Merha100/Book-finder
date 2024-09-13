import React, { useEffect, useState } from 'react';
import './BookSearch.css'

const BookSearch = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => setBooks(data.items))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [searchTerm]);

  return (
    <div className="search-result">
      <h5>Search Results for "{searchTerm}"</h5>
      <ul  className="SearchResult">
        {books.map(book => (
          <li className="book-item" key={book.id}>
            {book.volumeInfo.imageLinks && (
                  <img  className="listImg" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                )}
            <h3 className='book-title small-title'>{book.volumeInfo.title}</h3>
            <p className='book-author' >{book.volumeInfo.authors?.join(', ')}</p>
            </li>
        ))}
        </ul>
          </div>
        
    
  
  );
};
   
export default BookSearch;