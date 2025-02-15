// // import React , {use, useReducer}from 'react';
// // import './App.css';
// // //reducer function to track the number of apples
// // function appleReducer(state=3 , action){
// //   switch(action.type){
// //     case 'ADD_APPLE':
// //       return  state + 1;
// //     case 'EAT_APPLE':
// //       return state - 1;
// //     default:
// //       return state;
// //   }
// // }
// // function App(){
// //   const[state , dispatch] = useReducer(appleReducer,3);
// //   return(
// //     <div style={{padding:'20px',textAlign:'center'}}>
// //       <h1 style={{color:'red'}}>Apple Counter</h1>
// //       <p>Number of Apples : {state}</p>
// //       <img src='https://tse2.mm.bing.net/th?id=OIP.nKkm0wnm9J-Ko2rny3mAzAHaIo&pid=Api&P=0&h=180'></img>
// //       <img src='https://tse2.mm.bing.net/th?id=OIP.nKkm0wnm9J-Ko2rny3mAzAHaIo&pid=Api&P=0&h=180'></img><br/>
// //       <button onClick={()=>dispatch({type:'ADD_APPLE'})} style={{backgroundColor:'cadetblue'}}> ADD APPLE </button><br/>
// //       <button onClick={()=>dispatch({type:'EAT_APPLE'})} style={{backgroundColor:'cadetblue'}}> EAT APPLE </button>
      
// //     </div>
// //   )
// // }
// // export default App;
// // import React , {useState}from 'react';
// // import Child from './components/Child';
// // const Parent=()=>{
// //   const[message , setMessage]=useState('Hello World');
// //   const changeMessage=()=>{
// //     setMessage("You clicked the button")
// //   };
// //   return(
// //     <div>
// //       <h1>{message}</h1>
// //       {/*passing the change message function as a prop to the child */}
// //       <Child changeMessage={changeMessage}/>
// //     </div>
// //   )
// // }
// // export default Parent;
// import React, { useReducer } from 'react';
// // Reducer function to track the number of apples
// function appleReducer(state = 3, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'Eat_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(appleReducer, 3);
//   return (
//     <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px' }}>
//       {Array.from({ length: count }).map((_, index) => (
//         <img key={index} src={require('./th.jpg')} alt='Apple' style={{ width : '100px', height : '100px', margin: '5px', borderRadius: '10px' }} />
//       ))}
//       <h1 style={{color : 'red'}}>Apple Counter</h1>
//       <p>Number of apples: {count}</p>
//       <button
//         style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'cadetblue', color: 'white', border: 'none', borderRadius: '10px' }}
//         onClick={() => dispatch({ type: 'ADD_APPLE' })}
//       >
//         Add Apple
//       </button> <br/>
//       <button
//         style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'cadetblue', color: 'white', border: 'none', borderRadius: '10px' }}
//         onClick={() => dispatch({ type: 'Eat_APPLE' })}
//       >
//         Eat Apple
//       </button>
//     </div>
//   );
// }
// export default App;
import React, {useState, useEffect, useRef} from 'react';

function CounterWithPrev(){
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    //create a ref to store the previous value

    useEffect(()=>{
        prevCount.current = count;
    }, [count])

    return(
        <div style={{textAlign:'center' , padding: '50px'}}>
            <p>Current Counter: {count}</p>
            <p>prevCount: {prevCount.current}</p>

            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default CounterWithPrev;