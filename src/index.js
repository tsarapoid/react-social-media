import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


const baseUrl = 'https://api.github.com/users/'

const App = () => {
  const [userName, setUserName] = useState('codeartistryio')
  const [user, setUser] = useState({})
  const searchInput = useRef()
  
  useEffect(() => {
    getUser()
  }, [])
  
  function handleClearInput(){
    searchInput.current.value = ''
    searchInput.current.focus()
  }

  async function getUser() {
    const response = await fetch(`${baseUrl}${userName}`)
    const data = await response.json()
    setUser(data)
    /* console.log(route) */
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div>
      <input
        type='text'
        placeholder='Input username'
        onChange = {event => setUserName(event.target.value)}
        ref = {searchInput}
      />
      <button
        onClick={getUser}>
        Search
      </button>
      <button
        onClick = {handleClearInput}>
        Clear
      </button>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img alt='avatar' src={user.avatar_url} style={{height: 300}}/>
    </div>
  )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)
