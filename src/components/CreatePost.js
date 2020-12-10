import React, { useState, useEffect, useRef } from 'react'


const CreatePost = ({ user, setPosts, posts }) => {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const imageInputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const post = {content, image, user}
    const newPosts = [post, ...posts]
    setPosts(newPosts)
    setContent('')
    imageInputRef.current.value = ''
  }

  return (
    <div>
      <h1> Create New Post </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add post Content'
          onChange={event => setContent(event.target.value)}
          value={content}
        />
        <input
          type='file'
          onChange={event => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type='submit'> Submit Post </button>
      </form>
    </div>
  )
}

export default CreatePost