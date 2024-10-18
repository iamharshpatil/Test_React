import { Route, Routes } from "react-router-dom"
import Navigation from "./assets/components/Navigation"


function App() {

  return (
    <>
     
     <Navigation/>



    <div className=" w-[80%] p-10 mx-24 rounded-full bg-red-400 font-semibold" >
    <Routes>
      <Route path="/" element="Home Page" />
      <Route path="/About" element="This is About" />
      <Route path="*" element="Page Not Found" />
    </Routes>
    </div>
    
    </>
    
    
  )
}

export default App