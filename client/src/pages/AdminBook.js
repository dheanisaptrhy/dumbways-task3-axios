import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import bill from '../mockup/knowledge1.png'
import adminFormCss from '../components/AdminForm.module.css'
import AdminNavbar from '../components/AdminNavbar'
import { API } from '../config/api'

export default function AdminBook() {
  const { input, button, main, divButton, btnImg } = adminFormCss

  const [preview, setPreview] = useState(null) // image preview
  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    about:"",
    bookFile: ""
  })

  //function for handle on change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })
    //image url preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  }

  //function for handleSubmit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data"
        }
      }

      const formData = new FormData();
      formData.set("title", form.title)
      formData.set("publicationDate", form.publicationDate)
      formData.set("pages", form.pages)
      formData.set("author", form.author)
      formData.set("isbn", form.isbn)
      formData.set("about", form.about)
      formData.set("bookFile", form.bookFile[0], form.bookFile[0].name)

      const response = await API.post('/book', formData, config)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <AdminNavbar />
      <div className={main}>
        <Form onSubmit={handleSubmit}>
          <Form.Control className={input}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange} />

          <Form.Control className={input}
            type="date"
            placeholder="Publication Data"
            name="publicationDate"
            onChange={handleChange} />

          <Form.Control className={input}
            type="number"
            placeholder="Pages"
            name="pages"
            onChange={handleChange} />

          <Form.Control className={input}
            type="text"
            placeholder="Author"
            name="author"
            onChange={handleChange} />

          <Form.Control className={input}
            type="number"
            placeholder="ISBN"
            name="isbn"
            onChange={handleChange} />

          <Form.Control className={input}
            as="textArea"
            rows={3}
            placeholder="About This Book"
            name="about"
            onChange={handleChange} />

          <Form.File className={input}
            type="file"
            placeholder="Attache Book File"
            name="bookFile"
            onChange={handleChange} 
            multiple/>
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

          <div className={divButton}>
            <Button className={button} type="submit">
              Add Book
              <img src={bill} className={btnImg}></img>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
