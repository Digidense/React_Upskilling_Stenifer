import React, { useLayoutEffect, useState } from 'react'
import './App.css';

const App = () => {
  const [count , setCount] = useState(0);
  
  useLayoutEffect(() => {
    console.log("count", count);
  }, [count]);

  console.log("Rendered")

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((curr) => curr + 4)}>Add</button>
    </div>
  )
}

export default App
