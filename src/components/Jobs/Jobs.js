import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

class Jobs extends Component {    
    render() {

        return (

            
                <div style={{height:"50vh", background:"black"}}>
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left>
                            <Col>
                            <p  style={{fontSize:"30px", color:"white"}}>Nuestro software</p>
                            <Button
                                variant="contained"
                                style={{color: "black", fontSize:"50px"}}
                            href="https://github.com/Ferced"  target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/githubLogo.png"} alt="githublogo" style={{height: '5vh'}}/>
                            </Button>
                            </Col>
                        </Fade>
                    </Row>
                </div>

        )
    }
}

export default Jobs;


