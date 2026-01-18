const Card = ({ image, alt, fullName, description }) => {
  return (
    <div className="bg-white h-72 w-52 border-red-400 border-4 rounded-2xl p-3 m-3 flex flex-col">
      
      <div className="image mb-2">
        <img
          src={image}
          alt={alt}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>

      <div className="text-content">
        <h1 className="text-2xl font-bold text-center m-0">
          {fullName}
        </h1>
        <p className="text-center text-sm">
          {description}
        </p>
      </div>

    </div>
  );
};

export default Card;
