import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import MovingBackground from './components/MovingBackground/MovingBackground';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import { FaBeer } from 'react-icons/fa';
import Solutions from './components/SolutionsWeDeliver/SolutionsWeDeliver';
function App() {
  const contactRef = React.createRef();
  const technologyRef = React.createRef();
  const aboutUsRef = React.createRef();
  const socialNetworksRef = React.createRef();
  const scrollToRef = (refSection) =>
    refSection.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  return (
    <Router>
      <div>
        <div className="App" >
          {/* <Header /> */}

          <div style={{ background: "black", height: "100vh" }}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            
              <Fade delay={1500} style={{ width: "1000px" }}>
                <img src="/images/fercedLogo.png" />
              </Fade>
              <Fade delay={2000}>
                <img src="/images/fercedLogoText.png" style={{ height: "300px" }} />
              </Fade>
              <FaBeer />
            </div>
          </div>
          <Solutions/>
        </div>
      </div>
      {/* <Footer contactRef={contactRef} technologyRef={technologyRef} aboutUsRef={aboutUsRef} scrollToRef={scrollToRef} /> */}
    </Router>
  );
}

export default App;
