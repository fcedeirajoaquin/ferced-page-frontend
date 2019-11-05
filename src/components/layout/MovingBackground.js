import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Header from './Header';

class MovingBackground extends Component {
    titleText = {

        padding: 20,
        position: "absolute",
        color: "white",
        top: "40%",
        left: "50%",
        fontSize:"150%",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      }
    subTitleText  = {
        padding: 20,
        position: "absolute",
        color: "white",
        top: "60%",
        left: "50%",
        fontSize:"120%",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      }
  render () { 
      return ( <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={ 
        this.props.image

        }
        bgImageAlt=""
        strength={400}
        >
          <Header />
        <p style = {this.titleText}>{this.props.title}</p>
        <p style = {this.subTitleText}>{this.props.subTitle}</p>
        <div style={{ height: '400px' }} />
        </Parallax>
      )
}
}

export default MovingBackground;
