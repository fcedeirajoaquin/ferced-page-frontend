import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ImageCarousel from './components/layout/ImageCarousel';
import MovingBackground from './components/layout/MovingBackground';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container" >
          <Header />
          <MovingBackground image={process.env.PUBLIC_URL + "/background1.jpg"} title={"Construimos tu mundo digital."} subTitle={"Software de alto rendimiento."} />
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="business" size="large" color="#64B5F6" />
            <p style={{ color: "#64B5F6", fontWeight: "400", fontSize: "2.92rem", lineHeight: "110%", margin: "1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
              Acerca de nosotros
            </p>
            <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
              Ferced es una empresa enfocada en la resolucion de problemas o ideas digitales. Esta constantemente capacitando a sus desarrolladores para adquirir conocimientos en las tecnologias de vanguardia. Esto nos permite ofrecer codigo acorde al desarrollo del mercado actual y con gran desempeño.
            </p>
            <div style={{ backgroundColor: "#e0e0e0", height: "1px", width: "100%" }}></div>
          </div>
          <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <MaterialIcon icon="developer_mode" size="large" color="#64B5F6" />
            <p style={{ color: "#64B5F6", fontWeight: "400", fontSize: "2.92rem", lineHeight: "110%", margin: "1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
              Tecnologías
            </p>
            <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
              Estas son algunas de las tecnologias que podemos ofrecerte. En caso de necesitar otra tecnologia podes contactarte con nosotros.
            </p>
            <ImageCarousel />
          </div>
          <MovingBackground image={process.env.PUBLIC_URL + "/background2.jpg"} title={"Software multiplataforma."} subTitle={"Tus ideas en todos los dispositivos."} />

          <div style={{ background: "white", height: "50%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            <p style={{ color: "#64B5F6", fontWeight: "400", fontSize: "2.92rem", lineHeight: "110%", margin: "1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
              Contacto
            </p>
        
            <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
              Dejanos tus datos y nosotros te contactamos
          </p>
          </div>
          <MovingBackground image={process.env.PUBLIC_URL + "/background3.jpg"} title={"Construimos tu mundo digital."} subTitle={"Software de alto rendimiento."} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
