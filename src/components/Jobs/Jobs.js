import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

class Jobs extends Component {    
    render() {

        return (

            
                <div style={{ background:  "url(https://cdn-images-1.medium.com/max/1600/1*xZrSvUrS-6zQQBfevGed2w.gif)", height:"100vh", opacity:"0.9"}}>
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left>
                            <Col>
                            <p style={{fontSize:"50px", color: "white"}}>Nuestro Software</p>
                            <Button
                                variant="contained"
                                style={{ background: "green", color: "black", fontSize:"50px"}}
                            href="https://github.com/Ferced"  target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/githubLogo.png"} alt="githublogo" style={{height: '15vh'}}/>
                            </Button>
                            </Col>
                        </Fade>
                    </Row>
                </div>

        )
    }
}

export default Jobs;


