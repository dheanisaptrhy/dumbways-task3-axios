import landingModule from '../styles/Landing.module.css'
import logo from '../mockup/Icon.png'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Modal } from "react-bootstrap";
import CardSignIn from '../components/CardSignIn'
import CardSignUp from '../components/CardSignUp'
import { useState } from 'react';
import Home from './Home';

function Landing() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            {/* {state.isLogin ? <Home/>: ( */}
                <div className={landingModule.main}>
                <div>
                    <div className={landingModule.content}>
                        <div>
                            <img src={logo} />
                        </div>

                        <div className={landingModule.greetingContent}>
                            <p className={landingModule.contentP}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                        </div>

                        <Container className={landingModule.btn}>
                            <Button className={`${landingModule.button} ${landingModule.signup}`}
                                onClick={handleShow}>
                                Sign Up
                            </Button>
                            <Modal show={show} onHide={handleClose} centered>
                                <Modal.Body>
                                    <CardSignUp />
                                </Modal.Body>
                            </Modal>

                            <Button className={`${landingModule.button} ${landingModule.signin}`}
                                onClick={handleShow2}>
                                Sign In
                            </Button>
                            <Modal show={show2} onHide={handleClose2} centered>
                                <Modal.Body>
                                    <CardSignIn />
                                </Modal.Body>
                            </Modal>
                        </Container>
                    </div>

                </div>
            </div>
            {/* )}          */}
        </>

    );
}
export default Landing;