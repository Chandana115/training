const ChildB=({count , increment})=>{
    console.log("Child B rendered");
    return(
        <div>
    <h2>Count:{count}</h2>
    <button onClick={increment}>Increment</button>
    </div>
    );
};
export default ChildB;