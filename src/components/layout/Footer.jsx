import React,  { Component } from 'react';
import {
  Row,
  Col,
  Container
} from "reactstrap";

class Footer extends Component {
  render () { return(
  <>
  <Row>
    <Col><p>1 of 2</p></Col>
    <Col>  <p>2 of 2</p>  </Col>
  </Row>
  <Row>
    <Col><p>1 of 2</p></Col>
    <Col><p>1 of 2</p></Col>
    <Col><p>1 of 2</p></Col>
  </Row>
</>
    
  )
  }
}

const FooterStyle = {
  background: '#1976D2',
  color: '#fff',
  padding: '10px'
}
const SecondFooterStyle = {
  
  background: '#1b71c6',
  color: '#fff',
  pAlign: 'center',
  padding: '7px'
}
export default Footer;
