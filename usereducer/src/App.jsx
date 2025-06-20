import React, { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  return state + 1;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={dispatch}>Increase</button>
    </div>
  );
}

export default Counter;
