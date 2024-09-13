import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
 
    return (
      <footer className="footer">
        <p>© 2024 MM. All rights reserved.</p>
      </footer>
    );
  }
   export default Footer;