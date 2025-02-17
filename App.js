
// function App(){
//     const handleClick=()=>{
//         alert("Button Clicked")
//     };
//     return(
//         <div style={{textAlign : 'center' , padding : '20px'}}>
//         <button onClick={handleClick}>Click This</button>
//         </div>
//     )
// }
// export default App;
// import React , {useState} from 'react';
// function App(){
//     const[text , setText]=useState("")
//     //initially the value is set as empty string
//     const handleChange=(event)=>{
//         setText(event.target.value)
//         //update the text state with the value input
//     }
//     return(
//         <div style={{textAlign : 'center' , padding : '20px'}}>
//             <input type="text" value={text} onChange={handleChange} />
//             <p>Your text : {text}</p>
//         </div>
//     )
// }
// export default App;
import React , {useState} from 'react';
function App(){
    const[isHovered , setIsHovered]=useState(false);
    const handleMouseEnter=()=>{
        setIsHovered(true);
    }
    const handleMouseLeave=()=>{
        setIsHovered(false);
    }
    return(
        <div>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor:'isHovered'?'red':'cadetblue' , color:'isHovered'?'white':'blue'}}>Hover this</button>
            {isHovered && <p>Mouse is over the button</p>}
            
        </div>
    )
}
export default App;