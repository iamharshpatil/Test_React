

function Wrapper(props) {
  return (
    <div className="bg-zinc-400 p-4 mt-5 mx-6 rounded-xl">
        {props.children}
    </div>
  )
}

export default Wrapper