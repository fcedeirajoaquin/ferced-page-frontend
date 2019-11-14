import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {MessageSharp,PhoneSharp,EmailSharp, AccountCircle} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {
  Row,
  Col,
} from "reactstrap";


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


class ContactUs extends Component {

  classes = useStyles();
      render () { return (
         <div style={{paddingBottom:"60px"}}>
          <div style={{ background: "white", height: "50%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
          <p style={{ color: "#64B5F6", fontWeight: "400", fontSize: "2.92rem", lineHeight: "110%", margin: "1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
           Contacto
          </p>
          
          <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
           Dejanos tus datos y nosotros te contactamos
       </p>
       </div>
<Col  className="formInputGroup" style = {{margin:"0%"}}>

<Row  className="justify-content-md-center">
 <div className={this.classes.margin} style={{marginRight:"5%"}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField style= {{ width: "130%"}} id="input-with-icon-grid" label="Nombre" />
          </Grid>
        </Grid>
      </div>
      <div className={this.classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PhoneSharp />
          </Grid>
          <Grid item>
            <TextField style= {{ width: "130%" }} id="input-with-icon-grid" label="Telefono" />
          </Grid>
        </Grid>
      </div>


 </Row>
 
 <Row className="justify-content-md-center">
 <div className={this.classes.margin} style={{marginRight:"5%"}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <EmailSharp />
          </Grid>
          <Grid item>
            <TextField style= {{ width: "130%" }} id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
      </div>
      <div className={this.classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MessageSharp />
          </Grid>
          <Grid item>
            <TextField style= {{ width: "130%" }} id="input-with-icon-grid" label="Mensaje" />
          </Grid>
        </Grid>
      </div>


 </Row>
   

</Col>
 
 <Button
        variant="contained"
        className={this.classes.button}
        endIcon={<Icon>send</Icon>}
        style= {{background:"rgb(25, 118, 210)",color:"white"}}
      >
        Enviar
      </Button>
 </div>
      )};
    }

export default ContactUs;