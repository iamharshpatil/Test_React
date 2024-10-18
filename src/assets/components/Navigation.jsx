import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="flex gap-10 justify-center p-10 items-center">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  )
}

export default Navigation