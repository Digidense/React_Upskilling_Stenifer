import { useState } from 'react'
import UseRef from './hooks/UseRef'
import UseState from './hooks/UseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < UseState />
    < UseRef /> 
    </>
  )
}

export default App;
