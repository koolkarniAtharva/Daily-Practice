const App = () => {
  function btnclicked() {
       console.log("button is clicked") 
      }
  return (
    <div>
      <button 
      onClick={btnclicked} 
      className="bg-emerald-500 px-5 py-2 w-fit mx-2 my-2 rounded-xl">
          Click to download
      </button>
    </div>
  )
}

export default App
