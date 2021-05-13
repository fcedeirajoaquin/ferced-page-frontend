import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

class WhoWeAre extends Component {    
    render() {
        return (
            <>
    
            
            <div class="whowegradient" id="whoweare">
     
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                    <Fade left>
                        <Col>

                        <img src={process.env.PUBLIC_URL + "/images/logoJoaco.png"} alt="logoUser" style={{height: '30vh'}}/>

                        <p style={{color:"white", fontSize:"40px"}}>Joaquin Cedeira</p>
                            <p style={{color:"white"}}>Guardian of Systems</p>
                            <Button
                                variant="contained"
                                style={{ border:"none", color: "white", fontSize:"20px"}}
                            href="https://www.linkedin.com/mwlite/in/joaquin-fernandez-cedeira-75949012b"  target="_blank">
                                <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '15vh'}}/>
                            </Button>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col>
                        <img src={process.env.PUBLIC_URL + "/images/logoFranco.png"} alt="fercedlogo" style={{height: '30vh'}}/>
                        <p style={{color:"white", fontSize:"40px"}}>Franco Ferreira</p>
                            <p style={{color:"white"}}>Connections and some code</p>
                            <Button
                                variant="contained"
                                style={{border:"none", color: "white", fontSize:"20px"}}
                            href="https://www.linkedin.com/in/franco-ferreira-17b473182/"  target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/linkedinLogo.png"} alt="linkedinLogo" style={{height: '15vh'}}/>

                            </Button>
                        </Col>
                    </Fade>
                    
                </Row>
            </div>
            </>
        )
    }
}

export default WhoWeAre;
