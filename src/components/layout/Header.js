import React from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  imageShadowStyle = {
filter: 'brightness(0%)',
    height: "60px",
    marginLeft:"-5px",
position:'absolute',
zIndex:0
  }
imageStyle = {
    height: "60px",
position:'absolute',
zIndex:1
  }
 headerStyle = {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: '#fff',
    height:'55px',
    textAlign:'center',
    alignContent:"center",
  position:"absolute",
  width:"100%",
  zIndex:3
  }
  render() {
return(
  <header style={this.headerStyle}>
  <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}/>
  <img style={this.imageShadowStyle } src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}/>
</header>

)
  }

}



export default Header;
