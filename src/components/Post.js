import { Fragment } from 'react'

const Post = ({ image, content, user, currentUser }) => {

  const isCurrentUser = currentUser === user

  return <Fragment>
    {image && (
      <img 
        style={{ height: 300, width: 400, objectFit: 'cover'}}
        src={URL.createObjectURL(image)}
        alt='Post cover'
      />
    )}
    <p>{content}</p>
    <div style={{color: 'green'}}>{user}</div>
  </Fragment>
}

export default Post