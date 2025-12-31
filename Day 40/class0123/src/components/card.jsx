const Card = (props) => {
  return (
    <div className="w-75 bg-white text-center border-red-500 border-2 p-5 m-2 rounded-xl h-10">
      <h1 className="text-2xl font-semibold">
        {props.text}
      </h1>
    </div>
  );
};

export default Card;

