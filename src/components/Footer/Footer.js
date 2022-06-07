import React, { Component } from 'react';
 import {
   Row,
  Col
 } from "reactstrap";
 import Button from '@material-ui/core/Button';
class Footer extends Component {
  render() {
    return (
      <>
      <div style={{background:"black"}}>
            <Row>
               <Col>

               </Col>
            </Row>
            <Row xs="3" >
              <Col >
              <Button
                      variant="contained"
                      style={{color: "black", fontSize:"10px", background:"black"}}
                      href="https://github.com/Ferced"  target="_blank">
                      <img src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="githublogo" style={{height: '5vh'}}/>
              </Button>
              </Col>
              <Col >
              <Button
                      variant="contained"
                      style={{color: "black", fontSize:"30px", background:"black"}}
                      href="https://t.me/frxnco"  target="_blank">
                      <img src={process.env.PUBLIC_URL + "/images/telegram.png"} alt="telegramLogo" style={{height: '5vh'}}/>
              </Button>
              </Col>
              <Col >
              <Button
                    variant="contained"
                    style={{color: "black", fontSize:"30px", background:"black"}}
                    href="https://github.com/Ferced"  target="_blank">
                    <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="githublogo" style={{height: '5vh'}}/>
              </Button>
              </Col>
            </Row> 
      </div>
        
      </>
    )
  }
}

export default Footer;
