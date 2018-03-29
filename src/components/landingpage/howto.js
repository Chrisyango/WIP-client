import React from 'react';

export default function Howto(props) {
  return (
    <div className="howto">
      <div className="howto-content">
        <h2>Sharing your moments couldn't be easier!</h2>
        <h3 className="select">Select an image</h3>
        <h3 className="upload-and-share">Upload and Share! <i className="fas fa-arrow-right"></i></h3>
        <img src="../images/upload.jpg" alt="Upload" />
      </div>
    </div>
  )
}