import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router } from 'react-router-dom';
import Solutions from './components/SolutionsWeDeliver/SolutionsWeDeliver';
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // const contactRef = React.createRef();
  // const technologyRef = React.createRef();
  // const aboutUsRef = React.createRef();
  // const socialNetworksRef = React.createRef();
  // const scrollToRef = (refSection) =>
    // refSection.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  return (
    <Router>
      <div>
        <div className="App" >
          <Header />
          <div style={{ background: "black", height: "100vh" }}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
              <Fade delay={1500} style={{ width: "1000px" }}>
                <img src="/images/fercedLogo.png" alt="fercedlogo" />
              </Fade>
              <Fade delay={2000}>
                <img src="/images/fercedLogoText.png" alt="fercedlogoText" style={{ height: "300px" }} />
              </Fade>
            </div>
          </div>
          <Solutions/>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
