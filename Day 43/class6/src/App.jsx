import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNames([...names, name]);
    setName("");
  };

  return (
    <div className="text-white font-semibold">
      <form onSubmit={submitHandler}>
        <input
          className="bg-gray-600 p-3 m-3 rounded-3xl border-2 text-center"
          placeholder="pls enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="bg-blue-800 cursor-pointer p-3 m-3 rounded-3xl border-2">
          Submit
        </button>
      </form>

      {names.map((ele, index) => (
        <h4 key={index}>{ele}</h4>
      ))}
    </div>
  );
};

export default App;
