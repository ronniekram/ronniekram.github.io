import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'
import islands from './img/islands.png'
import newisland from './img/newisland.png'

function Navbar() {
  return (
        <nav className="navbar"> 
            <img src={logo} alt="logo" />

            <Link to='/islands' className="link" style={{paddingRight: '10px'}}>
              <img src={islands} alt="all islands link" />
            </Link>
            <Link to='/islands/new' className="link" style={{paddingRight: '10px'}}>
              <img src={newisland} alt="new island link" /> 
             </Link>
        </nav>
  )
}

export default Navbar;