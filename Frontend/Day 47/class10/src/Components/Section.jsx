import { useContext } from "react"
import { PostDataContext } from "../Context/PostContext"

const Section = () => {

  const data = useContext(PostDataContext) 
  console.log(data);
  return (
    <div className="h-120 bg-zinc-700">
        <h1 className="text-xl"> All Sections </h1>
    </div>
  )
}

export default Section
