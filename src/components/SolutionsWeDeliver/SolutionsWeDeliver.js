import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Jump from 'react-reveal/Jump';

class Solutions extends Component {    


    render() {
        return (
        <Row xs="2" style={{marginTop:"100px", width:"100%", height:"100%"}}>
            <Jump left>
            <Col>
            <MaterialIcon icon="autorenew" size='large'/><p style={{fontSize:"30px"}}> Business Processes Automation</p>
            </Col>
            <Col>
            <MaterialIcon icon="code" size='large'/><p style={{fontSize:"30px"}}> Web y Mobile applications</p>
            </Col>
            <Col>
            <MaterialIcon icon="integration_instructions" size='large'/><p style={{fontSize:"30px"}}> Integrations</p>
            </Col>
            <Col>
            <MaterialIcon icon="multiple_stop" size='large'/><p style={{fontSize:"30px"}}> Scaling Product Delivery</p>
            </Col>
            </Jump>
        </Row>
        )
    }
}

export default Solutions;
