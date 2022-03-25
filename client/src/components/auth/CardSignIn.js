import { Container, Form, Button, Modal } from 'react-bootstrap'
import signInModule from './CardSign.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { Navigate, useNavigate } from 'react-router-dom'

import { API } from '../../config/api'

function CardSignIn({ show, handleClose, setSignUp }) {
    const navigate = useNavigate();
    const {
        main,
        miniContainer,
        signinH1,
        input,
        button,
        klikHere,
        textKlik,
    } = signInModule
    const [state, dispatch] = useContext(UserContext)

    const [message, setMessage] = useState(null)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const { email, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSignUp = () => {
        setSignUp(true)
    }

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const body = JSON.stringify(form)
            const response = await API.post('/login', body, config)
            console.log(response);

            //ngecek proses
            if (response?.status == 200) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data
                })

                //cek status user
                if (response.data.data.role === "admin") {
                    navigate('/adminHome')
                } else {
                    navigate('/home')
                }
            }
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
                            <h2 className={signinH1}>Sign In</h2>
                        </div>
                        {message && message}
                        <Form onSubmit={handleOnSubmit}>
                            {/* <Form> */}
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
                            <Button className={button} type="submit">
                                Sign In
                            </Button>
                        </Form>
                        <div className={textKlik}>
                            <p>Don't have account ? Klik <Button variant="link" onClick={handleSignUp} className={klikHere}>Here</Button></p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default CardSignIn;