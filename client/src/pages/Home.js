import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import MainPage from '../components/MainPage';
import homeCss from '../styles/Home.module.css'
import List from '../components/List';


function Home() {
  const {main} = homeCss
  return (
    <div className={main}>
      <Row>
        <Col xs={2}>
          <Navbar/>
        </Col>
        <Col xs={10}>
          <MainPage/>
          <List/>
        </Col>
      </Row>
    </div>
  )
}
export default Home;