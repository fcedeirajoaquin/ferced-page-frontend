import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AppsIcon from '@material-ui/icons/Apps';

class WhoWeAre extends Component {    
    render() {
        return (

            <div style={{backgroundColor:"#009D71", height:"100vh"}} id="whoweare">
                <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                    <Fade left>
                        <Col>
                            <AutorenewIcon size='large' style={{color:"white"}} /><p style={{fontSize:"20px", color:"white"}}>Joaquin Cedeira</p>
                            <p style={{color:"white"}}>Guardian of Systems</p>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col>
                            <AppsIcon size='large' style={{color:"white"}}/><p style={{fontSize:"20px", color:"white"}}>Franco Ferreira</p>
                            <p style={{color:"white"}}>Connections and some code</p>
                        </Col>
                    </Fade>
                    
                </Row>
            </div>
    
        )
    }
}

export default WhoWeAre;
