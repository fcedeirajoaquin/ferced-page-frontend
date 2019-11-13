import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailSharp from '@material-ui/icons/EmailSharp';
import Grid from '@material-ui/core/Grid';
import {MessageSharp,PhoneSharp} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,

} from "reactstrap";


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function ContactUs () {

  const classes = useStyles();
      return (
         <div style={{paddingBottom:"60px"}}>
          <div style={{ background: "white", height: "50%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
          <p style={{ color: "#64B5F6", fontWeight: "400", fontSize: "2.92rem", lineHeight: "110%", margin: "1.9466666667rem 0 1.168rem 0", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
           Contacto
          </p>
          
          <p style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px", fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif", fontWeight: "normal", color: "rgba(0, 0, 0, 0.87)", display: "block", textAlign: "center", fontSize: "14px", lineHeight: "2rem" }}>
           Dejanos tus datos y nosotros te contactamos
       </p>
       </div>
  
<Col>

<Row>
 <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleSharpIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PhoneSharp />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>


 </Row>
 
 <Row>
 <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <EmailSharp />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MessageSharp />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>


 </Row>
</Col>
 
 <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
 </div>
      );
    }

