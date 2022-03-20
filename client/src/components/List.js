import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import contentData from '../data/contentData'

function List() {
    return (
        <>
            <Row>
                {contentData.map((data, index) => (
                    <Col style={{ maxHeight: '29rem' }}>
                        <Link to='/detailBook' style={{textDecoration:'none', color:'black'}}>
                            <Card style={{ width: '100%', maxHeight: '29rem', border: 'none' }}>
                                <Card.Img variant="top" src={data.book} style={{ maxWidth: '15rem' }} />
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
        </>
    )
}

export default List