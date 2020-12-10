import { Fragment, useState, useEffect, useCallback, createContext } from 'react'
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

  const handleAddPost = useCallback(
    newPost => {setPosts([newPost, ...posts])}, [posts])

  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <Fragment>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} handleAddPost={handleAddPost}/>
      <PostList user={user} posts={posts}/>
    </Fragment>
  )


}

export default App