import React from "react";
import { useState } from "react";


const App = () => {

  const [username,setusername] = useState("")
  
 const submitH = (e)=>{ 
   e.preventDefault();
   console.log(username)
 }


  return (
    <div>
      <form  onSubmit={submitH}>
      <input className=" border border-black" placeholder="Name" type="text" onChange={(e)=> setusername(e.target.value)} value={username} name="username" />
    <br />
    <input type="submit"/>
      </form>
    
    </div>
    
  )
};

export default App;
