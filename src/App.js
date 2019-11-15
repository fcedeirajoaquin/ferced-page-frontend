import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import MovingBackground from './components/MovingBackground/MovingBackground';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import scrollToComponent from 'react-scroll-to-component';

function App() {
  return (
    <Router>
      <div>
        <div className="App" >
          <Header />
          <button onClick={() => scrollToComponent(2020, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
          <MovingBackground image={process.env.PUBLIC_URL + "/background1.jpg"} title={"Construimos tu mundo digital."} subTitle={"Software de alto rendimiento."} />
          
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="business" size="large" color="#64B5F6" />
            <Typography variant="h2" gutterBottom style={{ color: "rgb(100, 181, 246)" }}>
              Acerca de nosotros
            </Typography>
            <Zoom>
              <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
                Ferced es una empresa enfocada en la resolucion de problemas o ideas digitales. Esta constantemente capacitando a sus desarrolladores para adquirir conocimientos en las tecnologias de vanguardia. Esto nos permite ofrecer codigo acorde al desarrollo del mercado actual y con gran desempeño.
              </p>
            </Zoom>
            <div style={{ backgroundColor: "#e0e0e0", height: "1px", width: "100%" }}></div>
          </div>
          <MovingBackground image={process.env.PUBLIC_URL + "/background2.jpg"} title={"Software multiplataforma."} subTitle={"Tus ideas en todos los dispositivos."} />
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="developer_mode" size="large" color="#64B5F6" />
            <Zoom>
              <Typography variant="h2" gutterBottom style={{ color: "rgb(100, 181, 246)" }}>
                Tecnologías
          </Typography>
              <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
                Estas son algunas de las tecnologias que podemos ofrecerte. En caso de necesitar otra tecnologia podes contactarte con nosotros.
            </p>
            </Zoom>
            <ImageCarousel />
          </div>
          <section className='indigo' ref={2020}>
          <MovingBackground image={process.env.PUBLIC_URL + "/background3.jpg"} title={"Llevamos el mundo de tus sueños a la realidad."} subTitle={""} />
           </section>
          <ContactUs />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
