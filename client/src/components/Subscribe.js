import {Container, Form, Button} from 'react-bootstrap'
import signInModule from './Subscribe.module.css'
import {Link} from 'react-router-dom'
import logo from '../mockup/wow.png'
import { useEffect, useState } from 'react'

function Subscribe(){
    const {main, 
           miniContainer, 
           premiumH1,
           input,
           button,
           textKlikP, 
           textKlik, 
           imageLogo } = signInModule

    // const [state, setState] = useState({
    //     isSubscribe: false,
    //     user: {
    //         account:'',
    //         payment:''
    //     }
    // })

    // useEffect(()=>{
    // }, [])

    // useEffect(()=>{
    //     if(state.user.email){

    //     }
    // }, [state])
    return(
        <div className={main}>
            <div className={miniContainer}>
                <div>
                    <h2 className={premiumH1}>Premium</h2>
                </div>
                <div className={textKlik}>
                    <p>Pay now and access all the latest books from</p>
                    <img src={logo} className={imageLogo}/>
                </div>
                <div className={textKlik}>
                    <img src={logo} className={imageLogo}/>
                    <p className={textKlikP}> : 0981312323</p>
                </div>
                <Form>
                    <Form.Control className={input} type="text" placeholder="Input your account number" />
                    <Form.Control className={input}  type="file" placeholder="File" />
                    <Button className={button} type="submit">
                    Send
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default Subscribe;