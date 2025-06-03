import { useEffect, useState } from "react";

const UseState = () => {
    let [number,setNumber] = useState(0);

useEffect(()=>{
    console.log("Component Rerender")
})    

    function handleClick(){
        setNumber((n) => n + 1);
    }
  return (
    <div>

      <h3 className="container">UseState</h3>
      <button onClick={handleClick}>
        Click Me <span>{number}</span>
      </button>
    </div>
  )
}

export default UseState;