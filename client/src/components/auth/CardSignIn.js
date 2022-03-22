import { Container, Form, Button } from 'react-bootstrap'
import signInModule from './CardSign.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CardSignIn() {
    const {
        main,
        miniContainer,
        signinH1,
        input,
        button,
        klikHere,
        textKlik,
    } = signInModule

    // const [state, setState] = useState({
    //     isLogin: false,
    //     user: {
    //         email: '',
    //         password: ''
    //     }
    // })

    // useEffect(() => {

    // })
    // useEffect(() => {
    //     if (state.user.email) {
    //     }
    // }, [state])

    // const handleOnSubmit = (e) => {
    //     e.preventDefault()
    //     const email = document.getElementById('email').value
    //     const password = document.getElementById('password').value
    //     setState({
    //         isLogin: true,
    //         user: {
    //             email,
    //             password
    //         }
    //     })
    // }

    return (
        <div className={main}>
            <div className={miniContainer}>
                <div>
                    <h2 className={signinH1}>Sign In</h2>
                </div>
                {/* <Form onSubmit={handleOnSubmit}> */}
                <Form>
                    <Form.Control className={input} type="email" placeholder="Email" id='email' name='email' />
                    <Form.Control className={input} type="password" placeholder="Password" id='password' name='password' />
                    <Button className={button} type="submit">
                        Sign In
                    </Button>
                </Form>
                <div className={textKlik}>
                    <p>Don't have account ? Klik <Link to='/signin' className={klikHere}>Here</Link></p>
                </div>
            </div>
        </div>
    );
}
export default CardSignIn;