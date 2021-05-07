import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Solutions from './components/SolutionsWeDeliver/SolutionsWeDeliver';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import ContactUs from './components/ContactUs/ContactUs';
import Jobs from './components/Jobs/Jobs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
          <WhoWeAre/>
          <Solutions/>
          <Jobs/>
          <ContactUs/>
          <Footer/>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
