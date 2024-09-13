import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Login from './components/login'
import Button from './components/button/Button'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import BookSearch from './components/BookSearch/BookSearch'
import Footer from './components/Footer/Footer'
import BookDetail from './components/BookDetail/BookDetail'
import BookList from './components/BookList/BookList';
import React, { useState } from 'react';



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
<>
<Nav setSearchTerm={setSearchTerm} />
  
  <main >
  <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/book/list" element={<BookList />} />
          <Route path="/book/new" element={<BookDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<BookSearch searchTerm={searchTerm} />} />
          </Routes>
  
  </main>
 

   <Footer /> 
    
</>

  );
}
export default App;
