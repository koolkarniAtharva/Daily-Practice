import Card from "./components/card";

const App = () => {
  const superheroes = [
    {
      fullName: "Bruce Wayne",
      image: "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Batman standing in armored suit",
      description: "Dark knight protecting Gotham city"
    },
    {
      fullName: "Clark Kent",
      image: "https://images.unsplash.com/photo-1754327819724-2a7ce4def33d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Superman flying through the sky",
      description: "Man of steel from Krypton"
    },
    {
      fullName: "Peter Parker",
      image: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Spider-Man swinging between buildings",
      description: "Friendly neighborhood web-slinging hero"
    },
    {
      fullName: "Tony Stark",
      image: "https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Iron Man in red and gold armor",
      description: "Genius billionaire armored Avenger"
    },
    {
      fullName: "Thor Odinson",
      image: "https://images.unsplash.com/photo-1626209731723-4bf514fcdcd1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Thor Holding his strombreaker",
      description: "God of Thunder"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center text-black">
      {superheroes.map((hero, index) => (
        <Card key={index} {...hero} />
      ))}
    </div>
  );
};

export default App;
