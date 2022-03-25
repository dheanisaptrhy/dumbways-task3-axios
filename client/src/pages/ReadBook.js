import React, { useRef } from 'react'

import {EpubViewer, ReactEpubViewer} from 'react-epub-viewer'
function ReadBook() {

    const viewerRef = useRef(null)
  return (
    <>
    <div>

    </div>
    <div style={{position:"relative",height:"100%"}}>
        {/* <ReactEpubViewer
        url={}
        ref={viewerRef}></ReactEpubViewer> */}
    </div>
    </>
  )
}

export default ReadBook