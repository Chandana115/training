import React from "react";
const Welcome=(props)=>{
    const{nname , greetings}=props;
    return(
        <h1 className="message">{greetings},{nname}</h1>
    )
}
export default Welcome;