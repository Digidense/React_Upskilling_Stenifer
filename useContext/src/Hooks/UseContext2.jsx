
// // import { useContext } from 'react'
// // import UseContext2 from './UseContext2.jsx';
// // import { ThemeContext } from '../App'


// // const UseContext2 = () => {

// //   const {theme} = useContext(ThemeContext);

// //   // console.log("contextValue" , contextValue)

// //   const textStyle={
// //     backgroundColor:theme=== "light" ? "white" : "black",
// //     color:theme=== "light" ? "black" : "white"
// //   }

// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export { UseContext2 };


// import { useContext } from 'react';
// import { ThemeContext } from '../App';

// const UseContext2 = () => {
//   const { theme } = useContext(ThemeContext);

//   const textStyle = {
//     backgroundColor: theme === "light" ? "white" : "black",
//     color: theme === "light" ? "black" : "white"
//   };

//   return (
//     <div>
//       {/* Your content here */}
//     </div>
//   );
// };

// export { UseContext2 };


import { useContext } from 'react';
import { ThemeContext } from '../App';

const UseContext2 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    marginTop: "10px"
  };

  return (
    <div style={textStyle}>
      <h2>Theme is: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default UseContext2;
