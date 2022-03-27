import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
// import imageSRC from '../mockup/tessand.png'
import detailCss from './DetailBook.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChe } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { API } from '../config/api'
import { useNavigate, useParams } from 'react-router-dom'

function DetailBook() {
  const { main, 
          colImage,
          imageBook,
          divTitle,
          divTitleTitle,
          divEditable,
          divItem,
          divItemTitle,
          textTitle,
          button,
          add,
          read,
          btnIcon} = detailCss

  let {id} = useParams(); //parameter
  const navigate = useNavigate(); //navigasi
  const [book, setBook] = useState([]); //setBook

  const getDetailBook = async (id) =>{
    try {
      const response = await API.get(`/book/${id}`)
      console.log(response);
      setBook(response.data.data.detail)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getDetailBook(id)
  },[])
  return (
    <Container className={main}>
      <Row>
        <Col xs={4} className={colImage}>
          <img src={book.bookFile} className={imageBook}/>
        </Col>
        <Col xs={8}>
          <div className={divTitle}>
            <h1 className={divTitleTitle}>{book.title}</h1>
            <p className={divEditable}>{book.author}</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle}>Publication Date</h5>
            <p className={divEditable}>{book.publicationDate}</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle}>Pages</h5>
            <p className={divEditable}>{book.pages}</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle} style={{color:'#D60000'}}>ISBN</h5>
            <p className={divEditable}>{book.isbn}</p>
          </div>
        </Col>
      </Row>
      <div className='my-4'>
        <h2 className={textTitle}>About This Book</h2>
        <p className={divEditable}>{book.about}</p>
        <div className='d-flex justify-content-end'>
          <Button className={`${button} ${add}`}>Add My List<FontAwesomeIcon icon={faBookmark} className={btnIcon} /></Button>
          <Button className={`${button} ${read}`} onClick={()=>navigate(`/readBook/${book.id}`)}>Read Book<FontAwesomeIcon icon={faAngleRight} className={btnIcon}/></Button>
        </div>
      </div>
    </Container>
  )
}

export default DetailBook