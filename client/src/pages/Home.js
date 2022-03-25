import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
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

  //didMount 
  useEffect(() => {
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
          <Navbar />
        </Col>

        {/* Main */}
        <Col xs={10}>
          <MainPage />
          <Row>
            {books?.map((data, index) => (
              <Col style={{ maxHeight: '29rem' }}>
                <Link to='/detailBook' style={{ textDecoration: 'none', color: 'black' }}>
                  <Card style={{ width: '100%', maxHeight: '29rem', border: 'none' }}>
                    <Card.Img variant="top" src={data.bookFile} style={{ maxWidth: '15rem' }} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontFamily: 'Times New Roman',
                          fontWeight: '700',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          maxHeight: '50px'
                        }}>
                        {data.title}
                      </Card.Title>
                      <Card.Text
                        style={{ color: 'darkgrey' }}>{data.author}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Home;