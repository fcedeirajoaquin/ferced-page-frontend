import React from 'react';
import { Parallax, Background } from 'react-parallax';

function MovingBackground() {
    const titleText = {

        padding: 20,
        position: "absolute",
        color: "white",
        top: "40%",
        left: "50%",
        fontSize:"2.92rem",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      };
      const subTitleText = {
        padding: 20,
        position: "absolute",
        color: "white",
        top: "60%",
        left: "50%",
        fontSize:"2rem",
        whiteSpace:"nowrap",
        transform: "translate(-50%,-50%)"
      };
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={ 
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg" 
      
}
    bgImageAlt=""
    strength={400}
>
    <p style = {titleText}>Construimos tu mundo digital.</p>
    <p style = {subTitleText}>Software de alto rendimiento.</p>
    <div style={{ height: '400px' }} />
</Parallax>
  )
}

export default MovingBackground;