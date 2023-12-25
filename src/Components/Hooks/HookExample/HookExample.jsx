import React from 'react'
import { useState } from 'react'


const HookExample = () => {



  


//count the number
     
    var [count,setCount]=useState(0);
        
    function handleIncreament(){
        setCount(count+1)       

    }

    function handlDecreament(){
        setCount(count-1)

    }

    
    var [time,setTime]=useState(new Date().toLocaleTimeString())
  
    function updateTime(){

      setTime(new Date().toLocaleTimeString())

    }

    setInterval(updateTime,1000)


  return (

    <div>
        <p>{count}</p>
        <button onClick={handleIncreament}>+</button>
        <button onClick={handlDecreament}>-</button>
    

        {       
        
        /*To update the current time
        
        <h1>{currentTime}</h1>
        <button onClick={timeInHours}>Time</button> */}


        <h1>{time}</h1>
        <button onClick={updateTime}>Time</button>
    </div>

  )
}

export default HookExample