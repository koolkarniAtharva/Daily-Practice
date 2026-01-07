import axios from 'axios'
import Card from './components/card'
import { useState } from 'react'

const App = () => {``
  const [allUser, setAllUser] = useState([])

  async function getdata() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )
    setAllUser(response.data)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <button
        onClick={getdata}
        className="bg-gray-500 p-2 m-3 rounded-xl cursor-pointer"
      >
        Get Data
      </button>

      {allUser.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  )
}

export default App
