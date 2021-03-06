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
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="business" size="large" color="#64B5F6" />
            <Typography variant="h2" gutterBottom style={{ color: "rgb(100, 181, 246)" }}>
              Acerca de nosotros
            </Typography>
            <Zoom>
              <section ref={aboutUsRef}>
                <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
                  Ferced es una empresa enfocada en la resolucion de problemas o ideas digitales. Esta constantemente capacitando a sus desarrolladores para adquirir conocimientos en las tecnologias de vanguardia. Esto nos permite ofrecer codigo acorde al desarrollo del mercado actual y con gran desempeño.
              </p>
              </section>
            </Zoom>
            <div style={{ backgroundColor: "#e0e0e0", height: "1px", width: "100%" }}></div>
          </div>
          <MovingBackground image={process.env.PUBLIC_URL + "/background1.jpg"} title={"Construimos tu mundo digital."} subTitle={"Software de alto rendimiento."} />

          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="business" size="large" color="#64B5F6" />
            <Typography variant="h2" gutterBottom style={{ color: "rgb(100, 181, 246)" }}>
              Acerca de nosotros
            </Typography>
            <Zoom>
              <section ref={aboutUsRef}>
                <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
                  Ferced es una empresa enfocada en la resolucion de problemas o ideas digitales. Esta constantemente capacitando a sus desarrolladores para adquirir conocimientos en las tecnologias de vanguardia. Esto nos permite ofrecer codigo acorde al desarrollo del mercado actual y con gran desempeño.
              </p>
              </section>
            </Zoom>
            <div style={{ backgroundColor: "#e0e0e0", height: "1px", width: "100%" }}></div>
          </div>
          <MovingBackground image={process.env.PUBLIC_URL + "/background2.jpg"} title={"Software multiplataforma."} subTitle={"Tus ideas en todos los dispositivos."} />
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="developer_mode" size="large" color="#64B5F6" />
            <Zoom>
              <section ref={technologyRef}>
                <Typography variant="h2" gutterBottom style={{ color: "rgb(100, 181, 246)" }}>
                  Tecnologías
          </Typography>
              </section>
              <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
                Estas son algunas de las tecnologias que podemos ofrecerte. En caso de necesitar otra tecnologia podes contactarte con nosotros.
            </p>
            </Zoom>
            <ImageCarousel />
          </div>


          <MovingBackground image={process.env.PUBLIC_URL + "/background3.jpg"} title={"Llevamos el mundo de tus sueños a la realidad."} subTitle={""} />
          <section ref={contactRef}>
            {/* <ContactUs /> */}
          </section>
        </div>
      </div>
      {/* <Footer contactRef={contactRef} technologyRef={technologyRef} aboutUsRef={aboutUsRef} scrollToRef={scrollToRef} /> */}
    </Router>
  );
}

export default App;
