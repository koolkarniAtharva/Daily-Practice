import { useState } from "react"

const Navbar = (props) => {
  const [inputTheme, setInputTheme] = useState("")

  const changeTheme = (e) => {
    e.preventDefault()
    props.setTheme(inputTheme)
    setInputTheme("")
  }

  return (
    <>
      <div className='bg-black text-white font-semibold text-2xl'>
        Theme is {props.Theme}
      </div>

      <form onSubmit={changeTheme}>
        <input
          className='bg-gray-500 p-2 m-2 rounded'
          type="text"
          placeholder='Enter theme'
          value={inputTheme}
          onChange={(e) => setInputTheme(e.target.value)}
        />

        <button className='bg-gray-500 p-2 m-2 rounded cursor-pointer'>
          Click Me
        </button>
      </form>
    </>
  )
}

export default Navbar
