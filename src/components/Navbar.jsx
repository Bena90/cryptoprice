import React from 'react';
import '../styles/Navbar.css';

const NavBar = () => {
  return (
    <nav className='navContainer'>
        <h2>
                <span className="logoOne">{'</ '}</span>               
                <span className="logoBe">Be</span>               
                <span className="logoCode">Code</span>               
                <span className="logoOne">{' >'}</span>               
        </h2>
    </nav>
  )
}

export default NavBar