import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import photoProfile from '../mockup/tyun.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMarsAndVenus, faPhone } from '@fortawesome/free-solid-svg-icons'
import profileCss from './Profile.module.css'
import { Link } from 'react-router-dom'

function Profile() {
    const { main,
            divLeft,
            styleIcon,
            divLeftDetail,
            divDetailUp,
            divDetailDown,
            divRight,
            imageProfile,
            button } = profileCss
    return (
        <div className={main}>
            <Row>
                <Col sm={9}>
                    <div className={divLeft}>
                        <div>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className={styleIcon}/>
                        </div>
                        <div className={divLeftDetail}>
                            <p className={divDetailUp}>dhnsptr@gmail.com</p>
                            <p className={divDetailDown}>Email</p>
                        </div>
                    </div>
                    <div className={divLeft}>
                        <div>
                        <FontAwesomeIcon icon={faMarsAndVenus} size="2x" className={styleIcon} />
                        </div>
                        <div>
                            <p className={divDetailUp}>Male</p>
                            <p className={divDetailDown}>Gender</p>
                        </div>
                    </div>
                    <div className={divLeft}>
                        <div>
                        <FontAwesomeIcon icon={faPhone} size="2x" className={styleIcon} />
                        </div>
                        <div>
                            <p className={divDetailUp}>08113333555555</p>
                            <p className={divDetailDown}>Phone Number</p>
                        </div>
                    </div>
                    <div className={divLeft}>
                        <div>
                        <FontAwesomeIcon icon={faLocationDot} size="2x" className={styleIcon} />
                        </div>
                        <div>
                            <p className={divDetailUp}>Celestia</p>
                            <p className={divDetailDown}>Address</p>
                        </div>
                    </div>
                </Col>

                <Col sm={3}>
                    <div className={divRight}>
                        <img src={photoProfile} className={imageProfile}/>
                        <Button className={button}>Edit Profile</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
    }

export default Profile