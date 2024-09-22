import About from "./About";
import Home from "./Home";
import Nav from "./Nav";

const App = () => {
  let user = [
    {
      name: "Harshwardhan",
      age: 27,
      city: "Bangalore",
    },
    { name: " Wang", 
      age: 25,
       city: "bhopal" },
  ];

  let r =  user.map((u,i)=> <h1 key={i}>{u.name}</h1> );
  return <div>
        {r}
  </div>;
};

export default App;
