import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var imageShadowStyle = {
filter: 'brightness(0%)',
    height: "60px",
    marginLeft:"-5px",
position:'absolute',
zIndex:0
  }
var imageStyle = {
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
width:"100%",
zIndex:3
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
