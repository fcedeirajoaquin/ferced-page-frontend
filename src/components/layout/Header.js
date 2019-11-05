import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var imageShadowStyle = {
filter: 'brightness(0%)',
left:'40%',
    height: "60px",
position:'absolute',
zIndex:0
  }
var imageStyle = {
    left:'41%',
    height: "60px",
position:'absolute',
zIndex:1
  }
  return (
    <header style={headerStyle}>
      <img style={imageStyle} src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}/>
      <img style={imageShadowStyle } src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}/>
   </header>
  )
}

const headerStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
  color: '#fff',
  height:'55px',
  textAlign:'center',
  alignContent:"center",
position:"absolute",
top:"30px",
zIndex:3
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
