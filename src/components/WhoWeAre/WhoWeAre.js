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
                        <p style={{color:"white", fontSize:"40px"}}>Joaquin Cedeira</p>
                            <p style={{color:"white"}}>Guardian of Systems</p>
                            <Button
                                variant="contained"
                                style={{ background: "#c850a0", color: "white", fontSize:"20px"}}
                            href="https://github.com/Ferced"  target="_blank">
                            Linkedin 
                            </Button>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col>
                        <p style={{color:"white", fontSize:"40px"}}>Franco Ferreira</p>
                            <p style={{color:"white"}}>Connections and some code</p>
                            <Button
                                variant="contained"
                                style={{ background: "#c850a0", color: "white", fontSize:"20px"}}
                            href="https://github.com/Ferced"  target="_blank">
                            Linkedin
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
