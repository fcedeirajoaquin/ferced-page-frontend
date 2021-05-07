import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Button from '@material-ui/core/Button';

class Jobs extends Component {    
    render() {

        return (

            <div style={{  background: "#FFFF", backgroundSize:"cover", 
                color:"white",  height:"100vh"}}>
                <div style={{backgroundColor:"black", opacity:"0.8", height:"100%"}}>
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left>
                            <Col>
                            <AutorenewIcon size='large'/><p style={{fontSize:"20px"}}>Nuestros Trabajos</p>
                            <Button
                                variant="contained"
                                style={{ background: "rgb(25, 118, 210)", color: "black" }}
                            href="https://github.com/Ferced"  target="_blank">
                            GitHub 
                            </Button>
                            </Col>
                        </Fade>
                    </Row>
                </div>
            </div> 
        )
    }
}

export default Jobs;


