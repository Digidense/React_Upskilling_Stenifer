
import React, { useEffect , useRef } from 'react';
import './UseRef.css';

const FocusRef = () => {
    const countRef = useRef(0);
    const spanRef = useRef(null);
    

    const handleClick = ()=>{
        countRef.current++;
        spanRef.current.innerText=countRef.current;
    };

    useEffect(() =>{
        console.log("useRef Component Rerender");
    });

    return (
        <div>
            
            <h3 className='container'>UseRef</h3>
            <button onClick={handleClick}>
                useRef <span ref={spanRef}>0</span>
            </button>
            <br/>
            
        </div>
    )
}

export default FocusRef;