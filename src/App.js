import React,  { Fragment, useState, useEffect, useRef } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const App = () => {
  const [user, setUser] = useState('reed')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `Please login`
  }, [user])

  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <Fragment>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} setPosts={setPosts} posts={posts}/>
      <PostList posts={posts}/>

    </Fragment>
  )


}

export default App