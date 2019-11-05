import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var imageStyle = {
    height: "60px"
  }
  return (
    <header style={headerStyle}>
      <div style={{background:"#000",width:"200px",height:"55px",marginLeft:"40%"}}>
      <img style={imageStyle} src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}/>

      </div>
   </header>
  )
}

const headerStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
  color: '#fff',
  height:'55px',
  textAlign:'center',
  alignContent:"center"
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
