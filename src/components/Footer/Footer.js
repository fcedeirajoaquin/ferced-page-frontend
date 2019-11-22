import React, { Component } from 'react';
import {
  Row,
  Col
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <div style={FooterStyle}>
          <Row>
            <Col style={{ width: "50%" }}>
              <p style={{ fontSize: '1.15rem' }}>Encontranos tambien en</p>
              <img style={{ height: "30px" }} src={process.env.PUBLIC_URL + "/footerlogo/githublogo.png"} alt={"github"} />
              <img style={{ height: "30px" }} src={process.env.PUBLIC_URL + "/footerlogo/telegramlogo.png"} alt={"telegram"} />
            </Col>
            <Col style={{ width: "50%" }}>
              <p style={{ fontSize: '1.15rem' }}>
                Indice
              </p>
              <p onClick={this.props.scrollToRef.bind(this.props.contactRef)}>
                Acerca de Ferced
              </p>
              <p onClick={this.props.scrollToRef.bind(this.props.technologyRef)}>
                Tecnologias
              </p>
              <p onClick={this.props.scrollToRef.bind(this.props.contactRef)}>
                Contacto
              </p>
              {/* <p onClick={this.props.scrollToRef.bind(this.props.contactRef)}>
                Redes sociales
              </p> */}

            </Col>
          </Row>

        </div>


        <div style={SecondFooterStyle}>
          <p style={{ fontSize: '14px' }}>Creada por Ferced 2019 ®</p>
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
