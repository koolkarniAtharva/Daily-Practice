import axios from 'axios';
import '../app/App.css';
import { useState, useEffect } from 'react'
function App() {
  const [Users, setUser] = useState([])

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUser(response.data)
      })
  }, [])

  return (
    <>
      <div className="app">
        <h1>Users</h1>
        <ul>
          {Users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
