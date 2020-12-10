import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const functionsCount = new Set()

const App = () => {
  const [user, setUser] = useState('reed')
  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `Please login`
  }, [user])

  const handleAddPost = useCallback(
    newPost => {setPosts([newPost, ...posts])}, [posts])

  functionsCount.add(handleAddPost)
  console.log(functionsCount)

  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <Fragment>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} handleAddPost={handleAddPost}/>
      <PostList posts={posts}/>
  <button onClick={() => setCount(prevCount => prevCount + 1)}> {count} + </button>
    </Fragment>
  )


}

export default App