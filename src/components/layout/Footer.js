import React from 'react';

function Footer() {
  return (
    <div style={FooterStyle}>
      <p>Creado por mi, obvio</p>

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