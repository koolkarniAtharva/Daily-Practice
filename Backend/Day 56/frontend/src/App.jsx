import { useState } from "react"
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([
    {
      title: "Test-Title",
      description: "Test-Description"
    },
    {
      title: "Test-Title",
      description: "Test-Description"
    },
    {
      title: "Test-Title",
      description: "Test-Description"
    },
    {
      title: "Test-Title",
      description: "Test-Description"
    }
  ])

  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    setnotes(res.data.note)
  })

  return (


    <div>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
