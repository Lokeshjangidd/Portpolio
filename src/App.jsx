import { useState } from 'react'

function App() {
  const [count, setCount] = useState(15)
  const add=()=>{
   
    
  }
  
  return (
    <>
     <div>hi {count}</div>
     <button onClick={add}>add </button>
    </>
  )
}

export default App
