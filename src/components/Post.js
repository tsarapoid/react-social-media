import { Fragment, useContext } from 'react'
import { UserContext } from '../App'

const Post = ({ image, content, user }) => {
  const currentUser = useContext(UserContext)
  const isCurrentUser = currentUser === user

  return (
    <Fragment>
      {image && (
        <img 
          style={{ height: 300, width: 400, objectFit: 'cover'}}
          src={URL.createObjectURL(image)}
          alt='Post cover'
        />
      )}      
      <p>{content}</p>
      <div style={{color: isCurrentUser && 'green'}}>{user}</div>
    </Fragment>
  )

}

export default Post