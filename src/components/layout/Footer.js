import React from 'react';

function Footer() {
  return (
    <>
    <div style={FooterStyle}>
      <p style={{fontSize:'1.15rem'}}>Encontranos tambien en</p>
      <form>
      </form>
    </div>
    <div style={SecondFooterStyle}>
      <p style={{fontSize:'14px'}}>Creada por Ferced 2019 ®</p>
      <form>
      </form>
    </div>
    </>
  )
}

const FooterStyle = {
  background: '#1976D2',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
const SecondFooterStyle = {
  
  background: '#1b71c6',
  color: '#fff',
  textAlign: 'center',
  padding: '7px'
}
export default Footer;
