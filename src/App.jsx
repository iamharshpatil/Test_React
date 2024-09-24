import React from "react";
import { useState } from "react";


const App = () => {
  
  const [Time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      
     <h1 className="text-[10vw]">{Time}</h1>
      
    </div>
    

    
  )
};

export default App;
