import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import imageSRC from '../mockup/tessand.png'
import detailCss from './DetailBook.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChe } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <Container className={main}>
      <Row>
        <Col xs={4} className={colImage}>
          <img src={imageSRC} className={imageBook}/>
        </Col>
        <Col xs={8}>
          <div className={divTitle}>
            <h1 className={divTitleTitle}>Tess on the Road</h1>
            <p className={divEditable}>Rachel Hartman</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle}>Publication Date</h5>
            <p className={divEditable}>June 2020</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle}>Pages</h5>
            <p className={divEditable}>436</p>
          </div>
          <div className={divItem}>
            <h5 className={divItemTitle} style={{color:'#D60000'}}>ISBN</h5>
            <p className={divEditable}>9781789807554</p>
          </div>
        </Col>
      </Row>
      <div className='my-4'>
        <h2 className={textTitle}>About This Book</h2>
        <p className={divEditable}>In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy. Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one. Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.</p>
        <div className='d-flex justify-content-end'>
          <Button className={`${button} ${add}`}>Add My List<FontAwesomeIcon icon={faBookmark} className={btnIcon} /></Button>
          <Button className={`${button} ${read}`}>Read Book<FontAwesomeIcon icon={faAngleRight} className={btnIcon}/></Button>
        </div>
      </div>
    </Container>
  )
}

export default DetailBook