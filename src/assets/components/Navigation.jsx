import {NavLink } from "react-router-dom"

function Navigation() {
  return (
    <div className="flex gap-10 justify-center p-10 items-center">

      <NavLink
      
      style={(e)=>(e.isActive ?  {textDecoration : "underline"} : {})}

      className={(e)=>(e.isActive ? "text-blue-500 " : "")} to="/">Home</NavLink>
      <NavLink
       style={(e)=>(e.isActive ?  {textDecoration : "underline"} : {})}
      className={(e)=>(e.isActive ? "text-blue-500 " : "")} to="/About">About</NavLink>
    </div>
  )
}

export default Navigation