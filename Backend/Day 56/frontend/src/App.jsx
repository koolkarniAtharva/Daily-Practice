import { useEffect, useState } from "react"
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([])
  function FetchNotes (){
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.note)
      })
  }  
  useEffect(() => {
    FetchNotes()
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    
    const {title,description} = e.target.elements

    console.log(title.value,description.value)
    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    }).then(res=>{
      console.log(res.data)
      FetchNotes()
    })
  }

  function handleDelete(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data);
      FetchNotes()
    })
  }

  function handleUpdate(noteId){
    const newDescription = prompt("Enter New Description")
    axios.patch("http://localhost:3000/api/notes/"+noteId,{description: newDescription})
    .then(res=>{
      console.log(res.data);
      FetchNotes()
    })
    
  }
  
   return (
    <div>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter Title"/>
        <input name="description" type="text" placeholder="Enter Description"/>
        <button>Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div>
              <button onClick={()=>{handleDelete(note._id)}}>Delete</button>
              <button onClick={()=>{handleUpdate(note._id)}}>Update</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
