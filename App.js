// import React , {use, useReducer}from 'react';
// import './App.css';
// //reducer function to track the number of apples
// function appleReducer(state=3 , action){
//   switch(action.type){
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'EAT_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }
// function App(){
//   const[state , dispatch] = useReducer(appleReducer,3);
//   return(
//     <div style={{padding:'20px',textAlign:'center'}}>
//       <h1 style={{color:'red'}}>Apple Counter</h1>
//       <p>Number of Apples : {state}</p>
//       <div >
//       <button onClick={()=>dispatch({type:'ADD_APPLE'})} style={{backgroundColor:'cadetblue'}}> ADD APPLE </button><br/>
//       <button onClick={()=>dispatch({type:'EAT_APPLE'})} style={{backgroundColor:'cadetblue'}}> EAT APPLE </button>
//       </div>
//     </div>
//   )
// }
// export default App;
import React , {useState}from 'react';
import Child from './components/Child';
const Parent=()=>{
  const[message , setMessage]=useState('Hello World');
  const changeMessage=()=>{
    setMessage("You clicked the button")
  };
  return(
    <div>
      <h1>{message}</h1>
      {/*passing the change message function as a prop to the child */}
      <Child changeMessage={changeMessage}/>
    </div>
  )
}
export default Parent;