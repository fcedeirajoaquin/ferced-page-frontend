import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{marginTop:'10px',position:'absolute',left:'35%'}}>Sarasa Co.</h1>
   </header>
  )
}

const headerStyle = {
  background: '#33b1ff',
  color: '#fff',
 
 height:'45px',
  textAlign:'center',
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
