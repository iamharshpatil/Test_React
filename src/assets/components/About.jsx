import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate()
    
    const SubmitHandler = (e)=>{
        console.log("submit");
      e.preventDefault()
      navigate("/")
        }
  return (

    <div>

        <form onSubmit={SubmitHandler} >
            <input type="text" name="name" placeholder="Name" />
            <br />
            <br />
            <input type="email" name="email" placeholder="Email" />
            <br />
            <br />
            <input className="bg-blue-500 p-2 rounded " type="Submit"/>
        </form>
    </div>
  )
}

export default About