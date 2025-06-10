


// import { createContext, useState } from 'react'
// import UseContext from './hooks/UseContext/'
// // import UseContext from './hooks/UseContext1/'
// // import UseContext from './hooks/UseContext2/'
// // import UseContext from './hooks/UseContext3/'

// export const ThemeContext = createContext();

// function App() {
//     const [count, setCount] = useState("light");

//     const toggleTheme =()=>{
//         setTheme((curr)=>(curr==="light" ? "dark" : "light"));
//     }

//     return (
//         <ThemeContext.Provider value = {{
//             theme:theme,
//         }}>
//         <>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//             <UseContext theme={theme}/>
//             {/* <UseContext1/>
//             <UseContext2/>
//             <UseContext3/> */}
//         </>
//         </ThemeContext.Provider>
//     )
// }

// export default App


// import React, { useState, createContext } from 'react';
// import UseContext from './UseContext';

// export const ThemeContext = createContext();

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <UseContext />
//     </ThemeContext.Provider>
//   );
// };

// export default App;


import React, { useState, createContext } from "react";
import UseContext from "./hooks/UseContext"; // ✅ corrected path

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UseContext />
    </ThemeContext.Provider>
  );
};

export default App;
