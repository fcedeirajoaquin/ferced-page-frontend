import React,  { Component } from 'react';
import {
  Row,
  Col,
  Container
} from "reactstrap";

class Footer extends Component {
  render () { return(
    <>
    <div style={FooterStyle}>
    <Row>
      <Col style={{width:"50%"}}>
      <p style={{fontSize:'1.15rem'}}>Encontranos tambien en</p>
      <img style = {{height:"30px"}} src={process.env.PUBLIC_URL + "/footerlogo/githublogo.png"}/>
      <img style = {{height:"30px"}} src={process.env.PUBLIC_URL + "/footerlogo/telegramlogo.png"}/>
      </Col>
    <Col style={{width:"50%"}}>
    <p style={{fontSize:'1.15rem'}}>
      Indice
    </p>
    <p>
      Acerca de Ferced
    </p>
    <p>
      Tecnologias
    </p>
    <p>
      Contacto
    </p>
    <p>
      Redes sociales
    </p>

    </Col>
    </Row>

    </div>
    
    
    <div style={SecondFooterStyle}>
      <p style={{fontSize:'14px'}}>Creada por Ferced 2019 ®</p>
      <form>
      </form>
    </div>
    </>
  )
  }
}

const FooterStyle = {
  background: '#1976D2',
  color: '#fff',
  padding: '10px'
}
const SecondFooterStyle = {
  
  background: '#1b71c6',
  color: '#fff',
  textAlign: 'center',
  padding: '7px'
}
export default Footer;
