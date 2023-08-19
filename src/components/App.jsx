import React, { useState } from "react";

function App() {
  const [name,setName]=useState("")
  const[heading,setHeading]=useState("")
 
  function handleName(event)
  {
    console.log(event.target.value)
    setName(event.target.value);
  }
  function handleButton(event)
  {
    setHeading(name)
    event.preventDefault();

  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input 
      onChange={handleName}
      type="text" placeholder="What's your name?" />
      <button
      
      onClick={handleButton}
      >Submit</button>
    </div>
  );
}

export default App;
