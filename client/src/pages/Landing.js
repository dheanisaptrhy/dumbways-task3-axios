import landingModule from '../styles/Landing.module.css'
import logo from '../mockup/Icon.png'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Modal } from "react-bootstrap";
import CardSignIn from '../components/auth/CardSignIn'
import CardSignUp from '../components/auth/CardSignUp'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';

function Landing() {
    let navigate = useNavigate();

    const [state] = useContext(UserContext);

    const checkAuth = () => {
        if (state.isLogin === true) {
            navigate('/home')
        }
    }
    checkAuth();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [SignIn, setSignIn] = useState(null)
    const [SignUp, setSignUp] = useState(null)

    //handle show modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    useEffect(()=>{
        if(SignIn){
            handleClose()
            handleShow2()
        }
    },[SignIn])

    useEffect(()=>{
        if(SignUp){
            handleClose2()
            handleShow()
        }
    },[SignUp])

    return (
        <>
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
                            {/* button Sign Up */}
                            <Button className={`${landingModule.button} ${landingModule.signup}`}
                                onClick={handleShow}>
                                Sign Up
                            </Button>

                            {/* button Sign In */}
                            <Button className={`${landingModule.button} ${landingModule.signin}`}
                                onClick={handleShow2}>
                                Sign In
                            </Button>
                        </Container>
                        <CardSignUp show={show} handleClose={handleClose} setSignIn={setSignIn}/>
                        <CardSignIn show={show2} handleClose={handleClose2} setSignUp={setSignUp}/>
                        
                    </div>

                </div>
            </div>
        </>

    );
}
export default Landing;