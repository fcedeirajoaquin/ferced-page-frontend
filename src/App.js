import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Carousel autoplay={true} interval= {500} showArrows={false} showIndicators={false} showStatus= {false} showThumbs = {false} infiniteLoop = {true}>
                <div>
                    <img
                    src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" 
                    alt="new"/>
                </div>
                <div>
                <img
                  src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F540461%2Fexplaining-why-stock-going-up-2018_05_10-12_39_51-utc.jpg&w=700&op=resize" 
                  alt="new"/>
                </div>
                <div>
                <img
                     src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F540461%2Fexplaining-why-stock-going-up-2018_05_10-12_39_51-utc.jpg&w=700&op=resize" 
                    alt="new"/>
                </div>
            </Carousel>
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     
<p>sarasa</p>     

       <Footer />
      </div>  
    </div>
  </Router>
  );
}

export default App;
