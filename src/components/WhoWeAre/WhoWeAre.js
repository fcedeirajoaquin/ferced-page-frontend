import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AppsIcon from '@material-ui/icons/Apps';

class WhoWeAre extends Component {    
    render() {
        return (
            <div style={{
                color:"white",  height:"100vh"}}>
                <div style={{backgroundColor:"black", opacity:"0.8", height:"100%"}}>
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left>
                            <Col>
                            <AutorenewIcon size='large'/><p style={{fontSize:"20px"}}>Joaquin Cedeira</p>
                            <p>Guardian of Systems</p>
                            </Col>
                        </Fade>
                        <Fade right>
                            <Col>
                            <AppsIcon size='large'/><p style={{fontSize:"20px"}}>Franco Ferreira</p>
                            <p>Connections and some code</p>
                            </Col>
                        </Fade>
                    
                    </Row>
                </div>
            </div> 
        )
    }
}

export default WhoWeAre;
