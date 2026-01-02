import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="text-white m-2 p-2">
        <h1>{count}</h1>
      </div>

      <button 
      onClick={Increase}
      className="text-white border-2 p-3 rounded-2xl"
      >
        Increase
      </button><button 
      onClick={Decrease}
      className="text-white border-2 p-3 rounded-2xl"
      >
        Decrease
      </button>
    </>
  );
};

export default App;
