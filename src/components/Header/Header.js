import React, { Component } from 'react';

class Header extends Component {
  state = {
    color: 'rgba(0,0,0,0.5)'
  }

  listenScrollEvent = e => {
    if (window.scrollY/70 > 0.5) {
      this.setState({color: 'rgba(0,0,0,'+(window.scrollY/70).toString()+')'})
    } else {
      this.setState({color: 'rgba(0,0,0,0.5)'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  imageShadowStyle = 
  {
    filter: 'brightness(0%)',
    height: "60px",
    marginLeft: "-30px",
    position: 'absolute',
    zIndex: 0
  }
  imageStyle = 
  {
    height: "60px",
    marginLeft: "-25px",
    position: 'absolute',
    zIndex: 1
  }
  headerStyle = 
  {
    backgroundColor: this.state.color,
    color: '#fff',
    height: '55px',
    textAlign: 'center',
    alignContent: "center",
    position: "fixed",
    width: "100%",
    zIndex: 3
  }
  render() {
    return (
      <header style={{
        backgroundColor: this.state.color,
    color: '#fff',
    height: '55px',
    textAlign: 'center',
    alignContent: "center",
    position: "fixed",
    width: "100%",
    zIndex: 3
      }}>
        <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"} alt={"fercedLogo"} />
        <img style={this.imageShadowStyle} src={process.env.PUBLIC_URL + "/ourLogos/fercedLogo.png"}  alt={"fercedLogoShadow"}/>
      </header>

    )
  }
}



export default Header;
