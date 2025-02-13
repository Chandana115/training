import React,{createContext,useContext} from "react";
//import Props from "./components/props";
//create context to hold the data
const DataContext=createContext()
function App() {
  const data = "Hello I am Chandana";
  return (<div>
    <DataContext.Provider value={data}>
      <User1/>
    </DataContext.Provider>
  
   </div> 
  );
}

// User1 component
function User1({ data }) {
  return <User2 data={data} />;
}

// User2 component
function User2({ data }) {
  return <User3 data={data} />;
}

// User3 component
function User3({ data }) {
  return <User4 data={data} />;
}

// User4 component
function User4({ data }) {
  
    const data1=useContext(DataContext);
    return(
      <div>{data1}</div>
  );
}

export default App;