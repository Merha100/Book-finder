
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";
import Logo from "../../assets/logo.jpg";
import React, { useState } from 'react';
import '../BookSearch/BookSearch.css';
const Nav = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(input);
    setInput(''); 
    navigate('/search');
  };
  return (
    <nav className="Nav-container">
      

      <ul className="nav-links">
      <li>
          <Link className="Link" exact to="/">
          <div className="logo">
        <img src={Logo} alt="App Logo" className="navbar-logo" />
        <h1>FindBooks</h1>
      </div></Link>
        </li>
        <li>
          <Link className="Link"  to="/book/list"> Book List </Link>
        </li>
        <li>
          <Link className="Link" to="/book/new"> Create Book </Link>
        </li>

        <li>
          <Link className="Link login" to="/login"> Login </Link>
        </li>
        </ul>
        
        <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
        
      
    </nav>
  );
}

export default Nav;
