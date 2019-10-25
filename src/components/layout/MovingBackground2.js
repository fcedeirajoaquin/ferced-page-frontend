import React from 'react';
import { Parallax, Background } from 'react-parallax';

function MovingBackground2() {
    const titleText = {

        padding: 20,
        position: "absolute",
        color: "white",
        top: "40%",
        left: "50%",
        fontSize:"150%",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      };
      const subTitleText = {
        padding: 20,
        position: "absolute",
        color: "white",
        top: "60%",
        left: "50%",
        fontSize:"120%",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      };
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={ 
      process.env.PUBLIC_URL +"/background2.jpg"   
}
    bgImageAlt=""
    strength={400}
>
    <p style = {titleText}>Software multiplataforma</p>
    <p style = {subTitleText}>Tus ideas en todos los dispositivos</p>
    <div style={{ height: '400px' }} />
</Parallax>
  )
}

export default MovingBackground2;
