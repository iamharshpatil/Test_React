import React from "react";
import { useState } from "react";


const App = () => {
  
  const [user, setuser] = useState("Harsh");

  return (
    <div>
      
      <h1 className="text-3xl p-4">{user}</h1>
      <button  onClick={()=> setuser('Harsh ji Patil')} className=" rounded m-5 py-2 px-4 bg-red-400">
        Click here
      </button>
      
    </div>
    

    
  )
};

export default App;
