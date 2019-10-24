import React from 'react';

function Footer() {
  return (
    <div style={FooterStyle}>
      <p style={{fontSize:'2rem'}}>Contactenos</p>
      <form>
     <input/> <input/>
      </form>
    </div>
  )
}

const FooterStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default Footer;
