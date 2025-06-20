import React ,{useState}from 'react'
import './UseState.css'



const UseState = () => {

    const[count , setCount] = useState(0)
  return (
    <div className='Header'>
        <h1>UseState</h1>
      <p className='Para'>Click me{count}</p>

      <div className='index'>
      <button onClick={() => setCount(count+1)} className='container1'>Increment</button>
      <button onClick={() => setCount(count-1)} className='container2'>Decrement</button>
      <button onClick={() => setCount(0)} className='container3'>Reset</button>
      </div>
    </div>
  )
}

export default UseState
