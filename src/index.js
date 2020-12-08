import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const endpoint = 'https://api.github.com/users/codeartistryio'

const App = () => {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUser() {
    const response = await fetch(endpoint)
    const data = await response.json()
    setUser(data)}
    getUser()
  }, [])


  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img alt='avatar' src={user.avatar_url} style={{height: 300}}/>
    </div>
  )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)
