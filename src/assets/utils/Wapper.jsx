

function Wapper( props) {
  return (
    <div className=" bg-red-400 rounded p-4 mx-5 mt-5 w-[80%] ">
        <h1>
            {props.children}
        </h1>
    </div>
  )
}

export default Wapper