import React, { useContext, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import signUpModule from './CardSign.module.css'

import { API } from '../../config/api'

function CardSignUp({ show, handleClose, setSignIn }) {
    const { main,
        miniContainer,
        signupH1,
        input,
        button,
        klikHere,
        textKlik,
    } = signUpModule

    //useState form
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const handleSignIn = () =>{
        setSignIn(true)
    }

    const { fullname, email, password } = form;

    // handlechange
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify(form)

            const response = await API.post('/register', body, config)
            console.log(response);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
                <div className={main}>
                    <div className={miniContainer}>
                        <div>
                            <h2 className={signupH1}>Sign Up</h2>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control
                                className={input}
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={email} />
                            <Form.Control
                                className={input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={password} />
                            <Form.Control
                                className={input}
                                type="text"
                                placeholder="Full Name"
                                name="fullname"
                                onChange={handleChange}
                                value={fullname} />
                            <Button className={button} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <div className={textKlik}>
                            <p>Already have an account ? Klik <Button variant="link" onClick={handleSignIn} className={klikHere}>Here</Button></p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default CardSignUp;