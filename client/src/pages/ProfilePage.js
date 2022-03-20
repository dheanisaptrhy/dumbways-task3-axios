import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyList from '../components/MyList';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import homeCss from '../styles/Home.module.css'

function ProfilePage() {
  const {main, textTitle} = homeCss
  return (
    <div className={main}>
      <Row>
        <Col xs={2}>
          <Navbar/>
        </Col>
        <Col xs={10}>
          <h2 className={textTitle}>Profile</h2>
          <Profile/>
          <h2 className={textTitle}>My List Book</h2>
          <MyList/>
        </Col>
      </Row>
    </div>
  )
}
export default ProfilePage;