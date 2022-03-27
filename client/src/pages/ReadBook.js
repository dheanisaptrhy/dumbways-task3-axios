import React, { useEffect, useRef, useState } from 'react'
import navbarCss from '../components/Navbar.module.css'
import logo from '../mockup/Icon2.png'
import { EpubViewer, ReactEpubViewer } from 'react-epub-viewer'
import { Link, useParams } from 'react-router-dom'
import { API } from '../config/api'
function ReadBook() {

  const {
    logoDiv,
    imageLogo,
    } = navbarCss

  let { id } = useParams();
  const viewerRef = useRef(null)
  const [book, setBook] = useState([])
  const getBook = async (id) => {
    try {
      const response = await API.get(`/bookRead/${id}`)
      setBook(response.data.data.detail)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBook(id)
  },[])
  return (
    <>
      <div>
        <Link to="/home">
          <div className={logoDiv}>
            <img src={logo} className={imageLogo} />
          </div>
        </Link>
      </div>
      <div style={{ position: "relative", height: "100%" }}>
        <ReactEpubViewer
          url={book.bookFile}
          ref={viewerRef}></ReactEpubViewer>
      </div>
    </>
  )
}

export default ReadBook