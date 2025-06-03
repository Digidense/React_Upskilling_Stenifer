import React, { useRef } from 'react';

function UseRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default UseRef;

// import React, { useState, useRef } from 'react';

// function UseRef() {
//   const [inputValue, setInputValue] = useState('');
//   const previousInputValue = useRef('');

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>Current Value: {inputValue}</p>
//       <p>Previous Value: {previousInputValue.current}</p>
//     </div>
//   );
// }

// export default UseRef;