import { createContext } from "react"
import { useState } from "react"

export const datacontext =  createContext(null)

function Wrapper(props) {
  
  const [data, setdata] = useState("Important Data")
  
  return (
    <datacontext.Provider value={[data, setdata]}>
      {props.children}
    </datacontext.Provider>
  )
}

export default Wrapper