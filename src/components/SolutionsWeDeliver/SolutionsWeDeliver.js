import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import BackupIcon from '@material-ui/icons/Backup';

class Solutions extends Component {    
    render() {
        return (
      
            <div style={{  background:  "url(https://i.pinimg.com/originals/b9/a2/9a/b9a29a075ec4beb68025515f63432880.gif)", backgroundSize:"cover", 
                color:"white",  height:"100vh"}}>
                <div style={{backgroundColor:"black", opacity:"0.8", height:"100%"}}>
                    <Row xs="2" style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"100%", height:"100%"}} >
                        <Fade left duration="5000">
                            <Col>
                            <AutorenewIcon size='large' color="pink"/><p style={{fontSize:"20px"}}> Business Processes Automation</p>
                            </Col>
                            <Col>
                            <CodeIcon size='large' color="green"/><p style={{fontSize:"20px"}}> Web y Mobile applications</p>
                            </Col>
                        </Fade>
                        <Fade right duration="5000">
                        <Col>
                            <AppsIcon size='large' color="violet"/><p style={{fontSize:"20px"}}> Integrations</p>
                            </Col>
                            <Col>
                            <BackupIcon size='large' color="yellow"/><p style={{fontSize:"20px"}}> Scaling Product Delivery</p>
                            </Col>
                        </Fade>
                    
                    </Row>
                </div>
            </div> 
        )
    }
}

export default Solutions;
