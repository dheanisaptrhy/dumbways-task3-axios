import {Container, Form, Button} from 'react-bootstrap'
import signUpModule from './CardSignUp.module.css'
import {Link} from 'react-router-dom'

function CardSignUp(){
    const {main, 
           miniContainer, 
           signupH1,
           input,
           button,
           klikHere, 
           textKlik, 
            } = signUpModule
    return(
        <div className={main}>
            <div className={miniContainer}>
                <div>
                    <h2 className={signupH1}>Sign Up</h2>
                </div>
                <Form>
                    <Form.Control className={input} type="email" placeholder="Email" />
                    <Form.Control className={input}  type="password" placeholder="Password" />
                    <Form.Control className={input}  type="text" placeholder="Full Name" />
                    <Button className={button} type="submit">
                    Sign In
                    </Button>
                </Form>
                <div className={textKlik}>
                    <p>Already have an account ? Klik <Link to='/signin' className={klikHere}>Here</Link></p>
                </div>
            </div>
        </div>
    );
}
export default CardSignUp;