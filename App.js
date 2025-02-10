import React , {useState} from 'react';
// //counter component
// const Counter = () => {
//   const[count , setCount] = useState(0);
//   //current state = count
//   //function to update state = setCount
//   //useState()- to initialize the state = 0;
//   return(
//     <div class="count">
//       <h2>{count}</h2>
//       <button onClick={() =>setCount(count+1)}>Increment</button>
//       <button onClick={() =>setCount(count-1)}>Decrement</button>
//     </div>
//   )
// }
const ThemeToggle=()=>{
  const[theme , setTheme]=useState('light');
  const toggleTheme=()=>{
    setTheme(prevTheme=>(prevTheme=='light'?'dark':'light'))
  }
    return(
      <div style={{backgroundColor:theme=='light'?'white':'black' , color:theme=='light'?'black':'white' , textAlign:'center'}}>
        <h1> The current theme is {theme}</h1>
        <button onClick={toggleTheme}>toggleTheme</button>
      </div>
    )
  }

export default ThemeToggle;