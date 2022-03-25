import { Container, Form, Button, Modal } from 'react-bootstrap'
import signInModule from './Subscribe.module.css'
import { Link } from 'react-router-dom'
import logo from '../mockup/wow.png'
import { useEffect, useState } from 'react'
import { API } from '../config/api'

function Subscribe() {
    const { main,
        miniContainer,
        premiumH1,
        input,
        button,
        textKlikP,
        textKlik,
        imageLogo } = signInModule

    const [show, setShow] = useState(false) //state modal
    const handleShow =()=> setShow(true)
    const handleClose =()=> setShow(false)
    const [preview, setPreview] = useState(null) //image preview
    const [form, setForm] = useState({
        transferProof: "",
        accountNumber: ""
    })

    const handleChange = (e) => {
        console.log(e)
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
        })
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const config = {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }

            const formData = new FormData()
            formData.set("transferProof", form.transferProof[0], form.transferProof[0].name)
            formData.set("accountNumber", form.accountNumber)
            const response = await API.post('/transaction', formData, config)
            handleShow()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={main}>
            <div className={miniContainer}>
                <div>
                    <h2 className={premiumH1}>Premium</h2>
                </div>
                <div className={textKlik}>
                    <p>Pay now and access all the latest books from</p>
                    <img src={logo} className={imageLogo} />
                </div>
                <div className={textKlik}>
                    <img src={logo} className={imageLogo} />
                    <p className={textKlikP}> : 0981312323</p>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Control className={input} 
                    type="text" 
                    placeholder="Input your account number"
                    name="accountNumber"

                    onChange={handleChange} />
                    <Form.Control className={input} 
                    type="file" 
                    placeholder="File"
                    name="transferProof"
                    onChange={handleChange} />
                    {preview && (
                        <div>
                            <img
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                }}
                                alt="preview"
                            />
                        </div>
                    )}
                    <Button className={button} type="submit">
                        Send
                    </Button>
                </Form>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>
                        <p style={{color:"#0acf83"}}>Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</p>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
export default Subscribe;