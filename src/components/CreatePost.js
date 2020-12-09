import React, { useState, useEffect, useRef } from 'react'


const CreatePost = ({ user }) => {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const post = {content, image, user}
  }

  return (
    <div>
      <h1> Create New Post </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add post Content'
          onChange={event => setContent(event.target.value)}
        />
        <input type='file'
          onChange={event => setImage(event.target.files[0])}
        />
        <button type='submit'> Submit Post </button>
      </form>
      <p>{content}</p>
      {image &&
      <img 
        style={{ height: 600, width: 600, objectFit: 'cover'}}
        src={URL.createObjectURL(image)} alt = {''}
      />}
    </div>
  )
}

export default CreatePost