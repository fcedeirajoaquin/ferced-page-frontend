import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

class WhoWeAre extends Component {    
    render() {
        return (
            <>
            <div id="#whoweare" style={{ background: "black"}}>
                    <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left>
                            <Col>
                            <img src={process.env.PUBLIC_URL + "/images/logoJoaco.png"} alt="logoJoaco" style={{height: '16vh'}}/>
                            <p style={{color:"white", fontSize:"30px"}}>Joaquin Cedeira</p>
                            <p style={{color:"white"}}>Guardian of Systems</p>
                                <Button
                                    variant="contained"
                                    style={{ border:"none", color: "white", fontSize:"20px"}}
                                    href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                                </Button>
                            </Col>
                        </Fade>
                        <Fade left>
                            <Col>
                            <img src={process.env.PUBLIC_URL + "/images/logoFranco.png"} alt="logoFranco" style={{height: '16vh'}}/>
                                <p style={{color:"white", fontSize:"30px"}}>Franco Ferreira</p>
                                <p style={{color:"white"}}>Conections / Code</p>
                                <Button
                                    variant="contained"
                                    style={{ border:"none", color: "white", fontSize:"20px"}}
                                    href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                                </Button>
                            </Col>
                        </Fade>
                    
                    </Row>
            </div>

            {/* <div id="whoweare"  style={{height:"45%"}} >
                <p>Hola</p>
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:"100%"}} >
                    <Col>
                        <Fade left>
                            <img src={process.env.PUBLIC_URL + "/images/logoJoaco.png"} alt="logoJoaco" style={{height: '16vh'}}/>
                            <p style={{color:"white", fontSize:"30px"}}>Joaquin Cedeira</p>
                            <p style={{color:"white"}}>Guardian of Systems</p>
                            <Button
                                variant="contained"
                                style={{ border:"none", color: "white", fontSize:"20px"}}
                                href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                            </Button>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade right>
                            <img src={process.env.PUBLIC_URL + "/images/logoFranco.png"} alt="logoFranco" style={{height: '16vh'}}/>
                                <p style={{color:"white", fontSize:"30px"}}>Franco Ferreira</p>
                                <p style={{color:"white"}}>Conections / Code</p>
                                <Button
                                    variant="contained"
                                    style={{border:"none", color: "white", fontSize:"20px"}}
                                    href="https://www.linkedin.com/in/franco-ferreira-17b473182/"  target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '5vh'}}/>
                                </Button>
                        </Fade>
                    </Col>
                </Row>
            </div> */}
            </>
        )
    }
}

export default WhoWeAre;
