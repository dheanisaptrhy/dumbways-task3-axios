import React, { useContext, useState } from "react";
import { Form, Button } from 'react-bootstrap'
import signUpModule from './CardSign.module.css'
import { Link } from 'react-router-dom'

import { API } from '../../config/api'

function CardSignUp( props ) {
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
                    <p>Already have an account ? Klik <Link to='/signup' className={klikHere}>Here</Link></p>
                </div>
            </div>
        </div>
    );
}
export default CardSignUp;