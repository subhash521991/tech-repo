import React from 'react';
import '../assets/css/Footer.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const footer = () => {
  return (
    <div>
  <div className="container-fluid">
  <div className="row ft-copyright pt-2 pb-2">
    <div className="col-sm-6 text-pp-crt">
      Cpoyright 2018 All Rights Reserved
    </div>
    <div className="col-sm-6 text-pp-crt-rg">
      Department of Information Reg No :
    </div>
  </div>
  </div>
  </div>
  )
}

export default footer