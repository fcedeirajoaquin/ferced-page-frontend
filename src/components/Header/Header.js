import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import ParticlesBg from 'particles-bg';
import { Button } from '@material-ui/core';
// import AutorenewIcon from '@material-ui/icons/Autorenew';
// import CodeIcon from '@material-ui/icons/Code';
// import AppsIcon from '@material-ui/icons/Apps';
// import BackupIcon from '@material-ui/icons/Backup';
import "./Header.css"
class Header extends Component {
  
   render() {
    return (
      <>
            <div class="Header">...
              <ParticlesBg type="cobweb" color="#50C878" num={20}  bg={true} />
              <div>
                <Row >
                  <Col>
                      <Fade delay={500}>
                        <img src={process.env.PUBLIC_URL + "/images/fercedLogo.png"} alt="fercedlogo" style={{height: '20vh'}}/>
                        <img src={process.env.PUBLIC_URL + "/images/fercedLogoText.png"}alt="fercedlogoText"  style={{height: '20vh'}}/>
                      </Fade>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Fade delay={800}>
                      <p style={{color:"white"}}>We solve your business with our software</p>
                      <br></br>
                    </Fade>
                  </Col>
                </Row>
              </div>
              <div id="#whoweare">
                      <Row xs="2" >
                          <Fade left delay={900}>
                              <Col>
                              <img src={process.env.PUBLIC_URL + "/images/logoJoaco.png"} alt="logoJoaco" style={{height: '10vh'}}/>
                              <p style={{color:"white", fontSize:"15px"}}>Joaquin Cedeira</p>
                              <p style={{color:"white"}}>Systems's Guardian</p>
                                  <Button
                                      variant="contained"
                                      style={{ border:"none", color: "white", fontSize:"10px"}}
                                      href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                      <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                                  </Button>
                              </Col>
                          </Fade>
                          <Fade right delay={900}>
                              <Col>
                              <img src={process.env.PUBLIC_URL + "/images/logoFranco.png"} alt="logoFranco" style={{height: '10vh'}}/>
                                  <p style={{color:"white", fontSize:"15px"}}>Franco Ferreira</p>
                                  <p style={{color:"white"}}>Conections / Code</p>
                                  <Button
                                      variant="contained"
                                      style={{ border:"none", color: "white", fontSize:"10px"}}
                                      href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                      <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                                  </Button>
                              </Col>
                          </Fade>
                      
                      </Row>
              </div>
              <br></br>
              <div>
              <Fade bottom delay={1500}>
                <Row>
                  <Col >
                    <b><p style={{color:"white", fontSize:"20px",}}>We contact you!</p></b>
                    <form>
                      <label>
                        <input type="text" name="name" placeholder="Input mail or phone" variant="contained"/>
                      </label>
                      <input type="submit" value="Send"  style={{marginLeft:"2px"}}/>
                    </form>
                  </Col>
                </Row>
               
                <br></br>
                <Row xs="3">
                  <Col >
                  <Button
                          variant="contained"
                          href="https://github.com/Ferced"  target="_blank">
                          <img src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="githublogo" style={{height: '5vh'}}/>
                  </Button>
                  </Col>
                  <Col >
                  <Button
                        variant="contained"
                        href="https://github.com/Ferced"  target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="githublogo" style={{height: '5vh'}}/>
                  </Button>
                  </Col>
                  <Col >
                  <Button
                          variant="contained"
                          href="https://t.me/frxnco"  target="_blank">
                          <img src={process.env.PUBLIC_URL + "/images/telegram.png"} alt="telegramLogo" style={{height: '5vh'}}/>
                  </Button>
                  </Col>

                </Row>
                </Fade> 
              </div>
            </div>
      </>
    )
  }

}

export default Header;
