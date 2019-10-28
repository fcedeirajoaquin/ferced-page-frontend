import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';



class ContactUs extends Component {

  render () { 
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
        <TextField
placeHolder="Nombre"
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircleSharpIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<TextField
  label="Telefono"
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircleSharpIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<TextField
  label="Email"
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircleSharpIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<TextField
  label="Nota"
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircleSharpIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
</div>
      )
}
}


export default ContactUs ;
