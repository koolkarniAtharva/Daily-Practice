import Card from "./components/card"
const App = () => {

  const arr = ["Athuu" , "Rohnu" , "Pritish" , "Sohan" , "Rudra" , "Shantanu" , "Vardhan" , "Tushar" , "Yashraj"]

  return (
    <div className="flex flex-col gap-4">
      {arr.map(function(ele){
        return <Card text= {ele} />
      })}
    </div>
  );
};

export default App  