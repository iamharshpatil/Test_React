import { useContext } from "react"
import {datacontext} from './assets/utils/Wrapper'

function App() {
  const [data, setdata] = useContext(datacontext)
  console.log(data)
  return (
    <div>App</div>
  )
}

export default App