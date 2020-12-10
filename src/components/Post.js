import React, { Fragment, useState, useEffect, useRef } from 'react'


const Post = ({ image, content, user }) => {
  return <Fragment>
    {image && (
      <img 
        style={{ height: 300, width: 400, objectFit: 'cover'}}
        src={URL.createObjectURL(image)}
        alt='Post cover'
      />
    )}
    <p>{content}</p>
    <div>{user}</div>
  </Fragment>
}

export default Post