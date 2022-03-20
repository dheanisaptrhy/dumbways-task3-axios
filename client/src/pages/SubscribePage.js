import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import homeCss from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe';

function SubscribePage() {
  const {main} = homeCss
  return (
    <div className={main}>
      <Row>
        <Col xs={2}>
          <Navbar/>
        </Col>
        <Col xs={10}>
          <Subscribe/>
        </Col>
      </Row>
    </div>
  )
}
export default SubscribePage;