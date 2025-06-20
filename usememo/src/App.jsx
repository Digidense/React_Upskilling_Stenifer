import React, { useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default App;

