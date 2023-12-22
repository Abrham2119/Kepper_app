import React from "react";
import LoginInput from "./LoginInput/LoginInput";

var isLogedIn=false;
const currentTime=new Date().getHours()

function renderConditionaly(){
    return(
        
        // isLogedIn ? <h1>Hello</h1> : <LoginInput /> 
        currentTime>12 ? <h1>waht are you still doing</h1> : null


        // // we can use just like this
        // currentTime>12 && <h1>waht are you still doing</h1> 

    )

         
            
}

function Login(){
    return(
        <div>
            {renderConditionaly()}

        </div>
    )
    
}
export default Login