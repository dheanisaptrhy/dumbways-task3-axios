import React from 'react'
import bill from '../mockup/knowledge1.png'
import { Container, Form, Button } from 'react-bootstrap'
import adminFormCss from './AdminForm.module.css'

export default function AdminForm() {
    const { input, button, main, divButton, btnImg } = adminFormCss
    return (
        <div className={main}>
            <Form>
                <Form.Control className={input} type="text" placeholder="Title" />
                <Form.Control className={input} type="date" placeholder="Publication Data" />
                <Form.Control className={input} type="number" placeholder="Pages" />
                <Form.Control className={input} type="text" placeholder="Author" />
                <Form.Control className={input} type="number" placeholder="ISBN" />
                <Form.Control className={input} as="textArea" rows={3} placeholder="About This Book" />
                <Form.File className={input} type="file" placeholder="Attache Book File" />
                <div className={divButton}>
                    <Button className={button} type="submit">
                        Add Book
                        <img src={bill} className={btnImg}></img>
                    </Button>
                </div>
            </Form>
        </div>
    )
}
