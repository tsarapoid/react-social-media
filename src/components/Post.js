import { Fragment } from 'react'
import { UserContext } from '../App'

const Post = ({ image, content, user }) => {

  return (
    <UserContext.Consumer>
      {currentUser => {
      
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
        <div style={{color: isCurrentUser === user && 'green'}}>{user}</div>
        </Fragment>
      )}}
    </UserContext.Consumer>
  )

}

export default Post