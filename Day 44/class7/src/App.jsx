import { useState } from "react";

const App = () => {

  const [userName, setuserName] = useState('');
  const [Role, setRole] = useState('');
  const [Description, setDescription] = useState('');
  const [img, setimg] = useState('');

  const [AllUser, setAllUser] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    
    const oldUsers = [...AllUser];
    oldUsers.push({userName,Role,Description,img})

    setAllUser(oldUsers)
    console.log(oldUsers)

    setuserName('')
    setRole('')
    setimg('')
    setDescription('')
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form
        onSubmit={(e) => { submithandler(e) }}
        className='flex flex-wrap p-2 justify-center'>
        <input
          value={userName} 
          onChange={(e)=>{
            setuserName(e.target.value)
          }}
          className='border-2 m-2 py-2 px-5  text-xl font-bold w-[48%] rounded'
          type='text'
          required
          placeholder='Enter your name '></input>
        <input
          value={img}
          onChange={(e)=>{
            setimg(e.target.value)
          }} 
          className='border-2 m-2 py-2 px-5  text-xl font-bold w-[48%] rounded'
          type='text'
          placeholder='Enter Image URL '></input>
        <input
          value={Role}
          onChange={(e)=>{
            setRole(e.target.value)
          }}  
          className='border-2 m-2 py-2 px-5  text-xl font-bold w-[48%] rounded'
          type='text'
          placeholder='Enter Role '></input>
        <input
          value={Description}
          onChange={(e)=>{
            setDescription(e.target.value)
          }} 
          className='border-2 m-2 py-2 px-5  text-xl
           font-bold w-[48%] rounded'
          type='text'
          placeholder='Enter Description '></input>

        <button className='px-5 py-2 bg-emerald-700 rounded m-2 
          w-[95%] items-center active:scale-95 cursor-pointer' >Create User</button>
      </form>
      <div className='flex flex-wrap p-2 justify-center'>
        
      </div>
    </div>
  )
}

export default App
