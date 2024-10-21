
import { Route, Routes } from "react-router-dom"
import About from "../components/About"

function Routing() {
  return (
    <div className=" w-[80%] p-10 mx-24 rounded bg-red-400 font-semibold" >
    <Routes>
      <Route path="/" element="Home Page" />
      <Route path="/About" element= {<About/>} />
      <Route path="*" element="Page Not Found" />
    </Routes>
    </div>
  )
}

export default Routing