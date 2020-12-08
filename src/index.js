import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  
  const [developer, setDeveloper] = useState({
    language: 'assembler',
    experience: 0,
    employed: false
  })

  useEffect(() => {
    document.title = developer.name
    console.log('runs')
  }, [developer.name])

  function handleChangeName(event) {
    setDeveloper({
      ...developer,
      name: event.target.value
    })
  }

  function handleChangeLanguahe() {
    setDeveloper({
      language: 'javascript',
      experience: 0
    })
  }

  function handleChangeYearsExperience(event) {
    setDeveloper({
      ...developer,
      experience: event.target.value
    })
  }

  function handleToggleEployment() {
    setDeveloper(prevState => ({
      ...prevState,
      employed: !prevState.employed
    }))
  }

  return (
    <div>
      <button onClick = {handleToggleEployment}>
        Toggle Eployment Status
      </button>
      <button onClick = {handleChangeLanguahe}>
        Change language
      </button>
      <div>
        <input type = 'number' onChange = {handleChangeYearsExperience}/>
      </div>
      <div>
        <input type = 'text' onChange = {handleChangeName} placeholder = 'Change Name'/>
      </div>
      <p> I am learning {developer.language} </p>
      <p> I have {developer.experience} years of experience {developer.language} </p>
      <p>
        Employment status: {developer.employed ? 'Employed' : 'Unemployed'}
      </p>
    </div>
  )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)