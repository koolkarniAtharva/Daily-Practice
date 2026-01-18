const Card = ({ name, username, email }) => {
  return (
    <div className="bg-gray-800 p-4 m-3 rounded-xl">
      <h1 className="text-xl font-bold">{name}</h1>
      <h2 className="text-md text-gray-300">{username}</h2>
      <h3 className="text-sm text-gray-400">{email}</h3>
    </div>
  )
}

export default Card
