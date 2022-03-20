import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DetailBook from '../components/DetailBook';
import Navbar from '../components/Navbar';
import homeCss from '../styles/Home.module.css'

function DetailPage() {
  const {main} = homeCss
  return (
    <div className={main}>
      <Row>
        <Col xs={2}>
          <Navbar/>
        </Col>
        <Col xs={10}>
            <DetailBook/>
        </Col>
      </Row>
    </div>
  )
}
export default DetailPage;