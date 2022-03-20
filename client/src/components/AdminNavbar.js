import React, { useRef, useState } from 'react'
import { Container, Row, Col, Overlay, Popover, Button, OverlayTrigger } from 'react-bootstrap'
import logo from '../mockup/Icon2.png'
import photoProfile from '../mockup/tyun.png'
import adminNavbarCss from './AdminNavbar.module.css'
import logo1 from '../mockup/knowledge1.svg'
import logo2 from '../mockup/logout1.svg'


export default function AdminNavbar() {
    const { imageLogo,
        btnImage,
        imageProfile,
        btnLogo,
        btnPop } = adminNavbarCss

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (
        <div className='mt-3 mx-5'>
            <Row>
                <Col xs={1}>
                    <img src={logo} className={imageLogo} />
                </Col>
                <Col xs={9}>
                </Col>
                <Col xs={2} className='d-flex justify-content-end' >
                    <div ref={ref}>
                        <button onClick={handleClick} className={btnImage}>
                            <img src={photoProfile} className={imageProfile} />
                        </button>

                        <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref.current}
                            containerPadding={30}
                        >
                            <Popover id="popover-contained">
                                <Popover.Content>
                                    <button className={btnPop}>
                                        <img src={logo1} className={btnLogo} />
                                        Add Book
                                    </button>
                                </Popover.Content>
                                <Popover.Content>
                                    <button className={btnPop}>
                                        <img src={logo2} className={btnLogo} />
                                        Logout
                                    </button>
                                </Popover.Content>
                            </Popover>
                        </Overlay>
                    </div>
                </Col>
            </Row>
        </div>
    )

}