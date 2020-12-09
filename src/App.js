import React, { useState, useEffect, useRef } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'

const App = () => {
  const [user, setUser] = useState('reed')

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `Please login`
  }, [user])

  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <CreatePost />
    </div>
  )

}

export default App