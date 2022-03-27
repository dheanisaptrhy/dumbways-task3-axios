import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import MainPage from '../components/MainPage';
import homeCss from '../styles/Home.module.css'
import List from '../components/List';
import contentData from '../data/contentData'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { API } from '../config/api';

function Home() {
  const { main } = homeCss

  let navigate = useNavigate();
  const [state] = useContext(UserContext);
  const [books, setBook] = useState([])
  const [profile, setProfile] = useState([])

  //handle show modal
  const [show, setShow] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // fungsi cek authentication
  const checkAuth = () => {
    if (!state.isLogin) {
      navigate('/')
    }
  }
  checkAuth();

  //fungsi getAllBooks
  const getBooks = async () => {
    try {
      const response = await API.get('/books')

      setBook(response.data.data)

    } catch (error) {
      console.log(error)
    }
  }
  const getUserNav = async (id) => {
    try {
      const response = await API.get(`/user/${id}`)
      setProfile(response.data.data)

    } catch (error) {
      console.log(error);
    }
  }

  //didMount 
  useEffect(() => {
    getUserNav(state.user.id)
    getBooks()
  }, [])



  // alert belum subscribe
  const alert = (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <p style={{ color: "#0ACF83" }}>Please make a payment to read the latest books</p>
      </Modal.Body>
    </Modal>
  )

  return (
    <div className={main}>
      {/* Navbar */}
      <Row>
        <Col xs={2}>
          <Navbar subscribe={profile} />
        </Col>

        {/* Main */}
        <Col xs={10}>
          <MainPage />
          <Row>
            {books?.map((data, index) => (
              <Col style={{ maxHeight: '29rem' }}>

                <Card style={{ width: '100%', maxHeight: '10rem', border: 'none' }}>
                  
                  <Button
                    onClick={() => navigate(`/book/${data.id}`)}
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      padding: '0', margin: '0'
                    }}>

                    <Card.Img variant="top" src={data.bookFile} style={{ maxWidth: '15rem' }} />
                    
                    <Card.Body
                      style={{
                        padding: '0',
                        marginTop:'20px',
                        marginBottom:'20px',
                        textAlign: 'left',
                        margin: '0',
                        color: 'black',
                      }}>
                        
                      <Card.Title
                        style={{
                          fontFamily: 'Times New Roman',
                          fontWeight: '700',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          maxHeight: '50px',
                        }}>
                        {data.title}
                      </Card.Title>

                      <Card.Text
                        style={{ color: 'darkgrey', fontSize: '14px' }}>{data.author}</Card.Text>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Home;