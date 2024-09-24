

const App = () => {
  const getinfo = () =>{
    console.log("helo World")
  }

  const takeinfo = (info) =>{
    console.log(info)
  }


  return (
    <div>
      <button onClick={getinfo} class =" rounded m-5 py-2 px-4 bg-red-400">
        Click here
      </button>
      

      <br />

      <button onClick={()=>takeinfo("helo")} class =" rounded m-5 py-2 px-4 bg-red-400">
        Press here
      </button>
    </div>
    

    
  )
};

export default App;
