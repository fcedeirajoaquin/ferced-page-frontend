import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MovingBackground from './components/layout/MovingBackground';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import { Parallax, Background } from 'react-parallax';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './App.css';
import { whileStatement } from '@babel/types';

function App() {
  const responsive = {

  superLargeDesktop: {

    // the naming can be any, depends on you.

    breakpoint: { max: 4000, min: 3000 },

    items: 5,

  },

  desktop: {

    breakpoint: { max: 200, min: 100 },

    items: 2,

  },

  tablet: {

    breakpoint: { max: 1024, min: 464 },

    items: 2,

  },

  mobile: {

    breakpoint: { max: 464, min: 0},

    items: 3,
    infinite:true, 
    arrows: false,
autoplay :true,

  },

};




  return (
    <Router>
    <div className="App">
      <div className="container" >
        <Header />
        <MovingBackground />
        <div style={{background:"white",height:"20%",textAlign:"center",marginTop:"50px",marginBottom:"2px"}}>
        <MaterialIcon icon="business" size="large" color="#64B5F6" />
          <p style={{color:"#64B5F6",fontWeight:"400",fontSize:"2.92rem",lineHeight:"110%",margin:"1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>
            Acerca de nosotros
            </p>
            <p style={{paddingLeft:"60px",paddingRight:"60px",paddingBottom:"30px",fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" ,fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)",display:"block",textAlign:"center",fontSize:"14px",lineHeight:"2rem"}}>
            Ferced es una empresa enfocada en la resolucion de problemas o ideas digitales. Esta constantemente capacitando a sus desarrolladores para adquirir conocimientos en las tecnologias de vanguardia. Esto nos permite ofrecer codigo acorde al desarrollo del mercado actual y con gran desempeño.
            </p>
         
            <div style={{backgroundColor:"#e0e0e0",height:"1px",width:"100%"}}></div>
            </div>

            <div style={{background:"white",height:"20%",textAlign:"center",marginTop:"50px",marginBottom:"2px"}}>
            <MaterialIcon icon="developer_mode" size="large" color="#64B5F6" />
          <p style={{color:"#64B5F6",fontWeight:"400",fontSize:"2.92rem",lineHeight:"110%",margin:"1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>
             Tecnologías
            </p>
            <p style={{paddingLeft:"60px",paddingRight:"60px",paddingBottom:"30px",fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" ,fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)",display:"block",textAlign:"center",fontSize:"14px",lineHeight:"2rem"}}>
            Estas son algunas de las tecnologias que podemos ofrecerte. En caso de necesitar otra tecnologia podes contactarte con nosotros.
            </p>
            
            <Carousel centerMode={true} arrows={false} autoPlay={true} infinite={true} transitionDuration={100} responsive={responsive}>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/firebaselogo.png"} alt="3"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/angularlogo.svg"} alt="new"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/JsCssHtml5Logo.png"} alt="2"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/pythonlogo.svg"} alt="4"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/reactlogo.png"} alt="5"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/sqllogo.png"} alt="6"/>
              <img style={{height:"90px"}} src={process.env.PUBLIC_URL +"/technologylogo/javalogo.png"} alt="1"/>
</Carousel>
        
 </div>

       <Footer />
      </div>  
    </div>
  </Router>
  );
}

export default App;
