import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
class Header extends Component {
  
   render() {
    return (
      <>
      <div style={{background:"black", height:"100vh"}}>

     
          <Row >
            <Col>

                <Fade delay={1500}>
                  <img src={process.env.PUBLIC_URL + "/images/fercedLogo.png"} alt="fercedlogo" style={{width: '30vh'}}/>
                </Fade>
            </Col>
          </Row>
          <Row>
            <Col>
              <Fade delay={2000}>
                    <img src={process.env.PUBLIC_URL + "/images/fercedLogoText.png"}alt="fercedlogoText"  style={{width: '30vh'}}/>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col>
              <Fade delay={3000}>
                <Button variant="contained"
                        style={{ background: "black", color: "white", width:'30vh' }}
                        href="https://github.com/Ferced"  target="_blank">
                          <KeyboardArrowDown size='large' color='white'/><p style={{fontSize:"100vh"}}></p>
                </Button>
                <br></br>
              </Fade>
            </Col>
          </Row>
          </div>
      </>
    )
  }

}

export default Header;
